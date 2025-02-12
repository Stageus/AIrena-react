import axios from 'axios'
const apiBaseUrl = import.meta.env.VITE_API_URL as string

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/'
    } else if (error.response.status === 404) {
      window.location.href = '/error' // 에러 페이지로 이동
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
