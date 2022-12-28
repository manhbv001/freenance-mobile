import axios from "axios";

const fetcher = axios.create({
  baseURL: `https://1c7e-14-248-83-170.ap.ngrok.io/api`,
});

fetcher.interceptors.request.use(
  function (config) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiOTljNzlhLWNjZGMtNGQ2My05Nzg4LTU5NWYyYjdjNDU3OSIsImZ1bGxuYW1lIjoiTWFuaCBCdWkiLCJpYXQiOjE2NzIyMTQ4NTcsImV4cCI6MTY3MjgxOTY1N30.8-bQYMI7SCKyArLYB8EekjKJNTo_fMRGNtD_sakr6O0";
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
