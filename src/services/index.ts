import AuthServices from "./auth.service";
import RestClient from "./restClient";

const restClient = new RestClient();

export const authServices = new AuthServices(restClient);
