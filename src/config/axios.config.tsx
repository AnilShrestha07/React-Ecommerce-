import axios, { AxiosError, AxiosResponse } from 'axios';
import { AppConfig } from './app.config';

const axiosInstance = axios.create({
    baseURL: AppConfig.baseUrl,
    timeout: 30000,
    timeoutErrorMessage: "Server timedout.. ",
    responseType:"json",
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.request.use((config)=>{
    if(localStorage.getItem("_at_")){
        config.headers.Authorization = "Bearer " + localStorage.getItem("_at_")
    }
    return config
})

axiosInstance.interceptors.response.use((response: AxiosResponse)=>{
    return response.data
},
(exception : AxiosError)=>{
    let errorResponse = {
        status: exception.status,
        error: exception?.response?.data
    }
    throw errorResponse
}
)


export default axiosInstance