import { useNavigate } from 'react-router-dom'
import { requestSignup } from '../api'

export const signup = (
  id: string,
  password: string,
  passwordCheck: string,
  email: string,
) => {
  const fetchData = async () => {
    const result = await requestSignup({ id, password, passwordCheck, email })
    if (result.status === 201) {
      useNavigate()(`/signup/email-verification-guide?email=${email}`)
    }
  }

  fetchData()
}
