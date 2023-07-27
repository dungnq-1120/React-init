import RestClient from "./restClient";

export default class AuthServices {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  async login(params: any) {
    return this.restClient.post("/auth/login", params);
  }

  async getProduct(params?: any) {
    return this.restClient.get("/products", params);
  }
}
