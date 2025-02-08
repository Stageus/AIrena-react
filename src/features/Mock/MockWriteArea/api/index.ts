import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockPostRequest {
  formData: FormData
}

export interface MockPostResponse {
  articleId: UUID
}

export const requestMockPost = async (mockWriteRequest: MockPostRequest) => {
  const response = await axiosInstance.post<MockPostResponse>(
    '/mock',
    mockWriteRequest,
  )
  return response.data
}
