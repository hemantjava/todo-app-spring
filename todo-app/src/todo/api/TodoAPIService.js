import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retriveAllUserName = (userName) =>
  apiClient.get(`/users/${userName}/todos`);
//http://localhost:8080/users/hemantjava/todos

export const retriveByUserNameAndId = (userName, id) =>
  apiClient.get(`/users/${userName}/todos/${id}`);
//http:localhost:8080/users/hemantjava/todos/1

export const deleteById = (id) => apiClient.delete(`/users/todos/${id}`);
