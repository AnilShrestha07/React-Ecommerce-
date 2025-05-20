import { ICredentials } from "../pages/auth/login/login";
import HttpService from "./http.server";
import Cookies from "js-cookie"

class AuthService extends HttpService{
    login = async(credential: ICredentials) =>{
        try {
        const response  = await  this.postRequest('/auth/login', credential)
        
        // Cookies.set("_at_", response.data.access)
        // Cookies.set("_at_", response.data.refresh)

        
const expiresIn30Sec = new Date();
expiresIn30Sec.setSeconds(expiresIn30Sec.getSeconds() + 30);

Cookies.set('shortLived', response.data.access, { expires: expiresIn30Sec });

        // Cookies.remove("_at_")


        localStorage.setItem("_ls_", response.data.access)
        localStorage.setItem("_ls_", response.data.refresh)



        sessionStorage.setItem("_ss_",response.data.access)
        sessionStorage.setItem("_ss_",response.data.refresh)


        console.log(response)
        } catch (exception) {
            console.log(exception)
            throw exception
        }
    }
}

const authSvc = new AuthService()
export default authSvc