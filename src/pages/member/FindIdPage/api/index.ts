import axiosInstance from '#shared/api/axiosInstance'

interface FindIdRequest {
  email: string
}

export interface FindIdResponse {
  email: string
  id: string
}

export const requestFindId = async (request: FindIdRequest) => {
  const result = await axiosInstance.post<FindIdResponse>(
    '/member/find/id',
    request,
  )
  return result
}
