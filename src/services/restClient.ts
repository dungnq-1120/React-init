import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";
import { get, isEmpty } from "lodash";

import { LoginStorage } from "~/utils/localstorage";

const SERVER_API_URL = process.env.NEXT_PUBLIC_API_URL;

const DEFAULT_APP_URL = {
  baseURL: SERVER_API_URL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
};

export const statusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export default class RestClient {
  config: AxiosRequestConfig;
  constructor(config = {}) {
    this.config = { ...DEFAULT_APP_URL, ...config };
  }

  async get(url: string, params = {}, config = {}) {
    return this.executeRequest(url, { ...config, params });
  }

  async post(url: string, data: any, config = {}, paramsType = "") {
    return this.executeRequest(url, {
      method: "post",
      ...config,
      data,
      paramsType,
    });
  }

  async put(url: string, data: any, config = {}, paramsType = "") {
    return this.executeRequest(url, {
      method: "put",
      ...config,
      data,
      paramsType,
    });
  }

  async delete(url: string, data = {}, config = {}) {
    return this.executeRequest(url, { method: "delete", ...config, data });
  }

  async patch(url: string, data = {}, config = {}, paramsType = "") {
    return this.executeRequest(url, {
      method: "patch",
      ...config,
      data,
      paramsType,
    });
  }

  async executeRequest(url: string, config: any) {
    const isFromDataRequest = config.paramsType === "formData";
    const userStorage = LoginStorage.getData();
    let finalHeaderConfig = { ...this.config.headers, ...config.headers };
    finalHeaderConfig = isFromDataRequest
      ? { ...finalHeaderConfig, "Content-Type": "multipart/form-data" }
      : finalHeaderConfig;

    const authorization = !isEmpty(userStorage)
      ? `Bearer ${userStorage?.tokenInfo.accessToken}`
      : "";
    if (userStorage)
      finalHeaderConfig = {
        ...finalHeaderConfig,
        Authorization: authorization,
      };

    const finalConfig = {
      ...this.config,
      ...config,
      url,
      data: isFromDataRequest ? config.data : decamelizeKeys(config.data),
      params: decamelizeKeys(config.params),
      headers: { ...finalHeaderConfig },
    };

    try {
      const response = await axios.request(finalConfig);
      return await Promise.resolve(camelizeKeys(response.data));
    } catch (responseError: any) {
      const responseStatus = get(responseError, "response.status", "");
      const newResponseError = get(responseError, "response.data", {
        code: 1,
        data: null,
        message: ["Network error!"],
      });
      const responseErrors = {
        responseStatus,
        ...newResponseError,
      };
      // 404 error
      if (responseStatus === statusCode.NOT_FOUND) {
        return Promise.reject(responseErrors);
      }

      // 500 error
      if (responseStatus >= statusCode.INTERNAL_SERVER_ERROR) {
        return Promise.reject(responseErrors);
      }

      // 401 error
      if (
        responseStatus === statusCode.UNAUTHORIZED ||
        responseStatus === statusCode.BAD_REQUEST
      ) {
        window.location.replace("/login");
      }
    }
  }
}
