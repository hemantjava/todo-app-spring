import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retriveHelloeWorldBean = () => {
  return apiClient.get("/hello-world-bean");
};

export const retriveHelloeWorldPathVariable = (name) => {
  return apiClient.get(`/hello-world/path-variable/${name}`);
};
