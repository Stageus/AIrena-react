import { useNavigate } from 'react-router-dom'
import { requestFindId } from '../api'

export const getRequestFindIdResult = async (email: string) => {
  const result = await requestFindId({ email })
  if (result.status === 200) {
    return result.data
  }
  return null
}

export const goLoginPage = (): void => {
  useNavigate()('/')
}
