import { requestFindId } from '../api'

export const getRequestFindIdResult = async (email: string) => {
  const result = await requestFindId({ email })
  if (result.status === 200) {
    return result.data
  }
  return null
}
