import axios from 'axios'
const apiBaseUrl = import.meta.env.VITE_API_URL as string

export const axiosMultipartInstance = axios.create({
  baseURL: apiBaseUrl,
})

axiosMultipartInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

axiosMultipartInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/'
    }
    return Promise.reject(error)
  },
)

export default axiosMultipartInstance
