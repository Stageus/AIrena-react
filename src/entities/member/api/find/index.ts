import axiosInstance from '#shared/api/axiosInstance'
import { FindIdRequest, FindIdResponse } from './types'

export const requestFindId = async (request: FindIdRequest) => {
  const result = await axiosInstance.post<FindIdResponse>(
    '/member/find/id',
    request,
  )
  return result
}
