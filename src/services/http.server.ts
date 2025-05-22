import axiosInstance from "../config/axios.config"

abstract class HttpService{
    getRequest = async(url:string, config: any = {})=> await axiosInstance.get(url, config)
    postRequest = async(url:string, data:any={},config:any = {}  ) => await axiosInstance.post(url, data, config)
    putRequest(){}
    patchRequest(){}
    deleteRequest(){}
    
    
}

export default HttpService