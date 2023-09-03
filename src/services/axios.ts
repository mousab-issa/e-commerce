import axios from "axios";
import { BASE_URL } from "common/config/endpoints";
import { useCookies } from "react-cookie";

export const api = axios.create({
  baseURL: BASE_URL,
});

// We can setup cookies here
export const setupApiInterceptors = (
  removeToken: (name: "token", options?: any) => void
) => {
  api.interceptors.request.use(function (config) {
    const [cookie] = useCookies(["token"]);
    const checkToken = cookie.token;

    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${checkToken}`;
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
  });

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const data = error.response?.data;

      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeToken("token");
      }
      return Promise.reject(error);
    }
  );
};
