import axios from "axios";

const baseURL = "http://localhost:8000/api/";

const getUser = JSON.parse(localStorage.getItem("persist:root"))?.user;

const getToken = getUser && JSON.parse(getUser).currentUser;

const TOKEN = getToken?.token;

console.log(TOKEN)

export const userRequest = axios.create({
  baseURL: baseURL,
  headers: { token: `Bearer ${TOKEN}` },
});

export const publicRequest = axios.create({
  baseURL: baseURL,
});
