import axiosMultipartInstance from '#shared/api/axiosMultipartInstance'
import { UUID } from 'crypto'

export interface MockWriteResponse {
  articleId: UUID
}

export const requestMockPost = async (formData: FormData) => {
  const response = await axiosMultipartInstance.post<MockWriteResponse>(
    '/mock',
    formData,
  )
  return response
}
