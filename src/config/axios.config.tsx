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
    return config
})

axiosInstance.interceptors.response.use((response: AxiosResponse)=>{
    return response.data
},
(exception : AxiosError)=>{
    
}
)


export default axiosInstance