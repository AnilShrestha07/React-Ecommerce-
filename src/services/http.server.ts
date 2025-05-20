import axiosInstance from "../config/axios.config"

abstract class HttpService{
    getRequest(){}
    postRequest = async(url:string, data:any={},config:any = {}  ) => await axiosInstance.post(url, data, config)
    putRequest(){}
    patchRequest(){}
    deleteRequest(){}
    
    
}

export default HttpService