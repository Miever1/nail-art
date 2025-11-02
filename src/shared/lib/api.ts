import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      const msg = err.response.data?.message || "Request failed";
      return Promise.reject(new Error(msg));
    } else if (err.request) {
      return Promise.reject(new Error("Network error"));
    } else {
      return Promise.reject(err);
    }
  }
);