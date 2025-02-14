import axios from 'axios'
import { toast } from 'react-toastify'
const apiBaseUrl = import.meta.env.VITE_API_URL as string

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname == '/'
    ) {
      return Promise.reject(error)
    }

    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== '/'
    ) {
      window.location.href = '/'
    }

    toast.error(error.response.data.message)
  },
)

export default axiosInstance
