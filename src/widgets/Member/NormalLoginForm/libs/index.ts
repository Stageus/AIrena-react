import { useNavigate } from 'react-router-dom'

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
