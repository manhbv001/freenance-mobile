import axios from "axios";

const fetcher = axios.create({
  baseURL: `https://38c7-42-119-190-82.ngrok.io/api`,
});

fetcher.interceptors.request.use(
  function (config) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwZmY3YTMzLTViMjAtNGRlMS05MTQzLTI3YzU5NjExYzQxZCIsImZ1bGxuYW1lIjoiTWFuaCBCdWkiLCJpYXQiOjE2NzIyNDk1NzgsImV4cCI6MTY3Mjg1NDM3OH0.Yv-yRjlIclW_QyaWDzQZxiGQhUQpAo7n76ebRACjJmU";
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
