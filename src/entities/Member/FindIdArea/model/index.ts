import { useNavigate } from 'react-router-dom'
import { requestFindId } from '../api'

export const getRequestFindIdResult = async (email: string) => {
  const result = await requestFindId({ email })
  return result
}

export const goLoginPage = (): void => {
  useNavigate()('/')
}
