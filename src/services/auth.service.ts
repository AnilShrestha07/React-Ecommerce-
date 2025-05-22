import { ICredentials } from "../pages/auth/login/login";
import HttpService from "./http.server";

class AuthService extends HttpService {
  getLoggedInUser = async () => {
    try {
      const response = await this.getRequest("auth/me");
      return response.data;
    } catch (exception) {
      throw exception;
    }
  };
  refreshTokenCall = async () => {
    try {
      const response = await this.getRequest("auth/refresh", {
        headers: {
          Authorization: "Refresh " + localStorage.getItem("_rt_"),
        },
      });
      localStorage.setItem("_at_", response.data.access);
      localStorage.setItem("_rt_", response.data.refresh);

      let userDetail = await this.getLoggedInUser();

      return userDetail;
    } catch (exception) {
      throw exception;
    }
  };

  login = async (credential: ICredentials) => {
    try {
      const response = await this.postRequest("/auth/login", credential);

      // Cookies.set("_at_", response.data.access)
      // Cookies.set("_at_", response.data.refresh)

      // Cookies.remove("_at_")

      localStorage.setItem("_at_", response.data.access);
      localStorage.setItem("_rt_", response.data.refresh);

      let userDetail = await this.getLoggedInUser();

      return userDetail;

      // sessionStorage.setItem("_ss_",response.data.access)
      // sessionStorage.setItem("_ss_",response.data.refresh)

      
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
}

const authSvc = new AuthService();
export default authSvc;
