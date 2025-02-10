import axiosMultipartInstance from '#shared/api/axiosMultipartInstance'
import { UUID } from 'crypto'

export interface MockPostResponse {
  articleId: UUID
}

export const requestMockPost = async (formData: FormData) => {
  const response = await axiosMultipartInstance.post<MockPostResponse>(
    '/mock/write',
    formData,
  )
  return response.data
}
