import RestClient from "./restClient";

export default class AuthServices {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  login(params: any) {
    return this.restClient.post("/auth/login", params);
  }

  getProduct(params?: any) {
    return this.restClient.get("/products", params);
  }
}
