
import axios from "axios"
const HttpInstance = axios.create(
    {
        baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net",
        timeout:5000
    }
)

HttpInstance.interceptors.request.use(
    config => {return config },
    e => Promise.reject(e)
)
 HttpInstance.interceptors.response.use(
     res => res.data,
     e =>{return Promise.reject(e)}
 )
export default HttpInstance
