import axios from "axios";

const fetcher = axios.create({
  baseURL: `https://d445-42-119-190-82.ngrok.io/api`,
});

fetcher.interceptors.request.use(
  function (config) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjMzdhZTg2LWM3NmQtNGQxOC04MzU2LTJiMjg0MmY3NDNmMyIsImZ1bGxuYW1lIjoiQsO5aSBWxINuIE3huqFuaCIsImlhdCI6MTY3MjMyODcxMywiZXhwIjoxNjcyOTMzNTEzfQ.yLZKh4xCoPTYCZABjFq9SyU9fJAba4U9xpf0xq223uM";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default fetcher;
