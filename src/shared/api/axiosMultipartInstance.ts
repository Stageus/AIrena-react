import axios from 'axios'
import { toast } from 'react-toastify'
const apiBaseUrl = import.meta.env.VITE_API_URL as string

const axiosMultipartInstance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
})

axiosMultipartInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

axiosMultipartInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data.message)
    return Promise.reject(error)
  },
)

export default axiosMultipartInstance
