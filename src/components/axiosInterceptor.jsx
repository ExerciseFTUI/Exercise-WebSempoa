import axios from "axios";
import { unstable_HistoryRouter } from "react-router-dom";

const axiosToken = axios.create();

axiosToken.interceptors.request.use(
  async (config) => {
    try {
      await axios.get("http://localhost:5000/auth/token");
      console.log("Success");
    } catch (error) {
      console.error(error);
      unstable_HistoryRouter.push("login");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosToken;
