import { useNavigate } from 'react-router-dom'
import { requestCheckLogin, requestNormalLogin } from '../api'

const API_URL = import.meta.env.VITE_API_URL

const navigate = useNavigate()

export const goFindPasswordPage = () => {
  navigate('/find/password')
}

export const goFindIdPage = () => {
  navigate('/find/id')
}

export const goSignupPage = () => {
  navigate('/signup')
}

export const goLoginRedirect = () => {
  navigate('/redirect/login')
}

export const goGoogleLoginPage = (): void => {
  window.location.href = `${API_URL}/login/google`
}

export const goKakaoLoginPage = (): void => {
  window.location.href = `${API_URL}/login/kakao`
}

export const checkLoginWithNavigate = async () => {
  const result = await requestCheckLogin()
  if (result.status === 200) {
    goLoginRedirect()
  }
}

export const normalLoginWithNavigate = (id: string, password: string) => {
  const fetchData = async () => {
    const result = await requestNormalLogin({ id, password })
    if (result.status === 200) {
      goLoginRedirect()
    }
  }

  fetchData()
}
