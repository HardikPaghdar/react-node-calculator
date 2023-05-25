import axios from 'axios'
import env from './../env'

const service = axios.create({
    baseURL: env.APP_URL,
    timeout: 60000
});

service.interceptors.response.use((response: any) => {
    return response;
},  (error) => {
    return Promise.reject(error.response)
});

service.interceptors.request.use((config:any) => {
    return config
}, (error) => {
    return Promise.reject(error)
});

export default service
