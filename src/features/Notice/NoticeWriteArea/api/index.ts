import axiosMultipartInstance from '#shared/api/axiosMultipartInstance'
import { UUID } from 'crypto'

export interface NoticeWriteResponse {
  articleId: UUID
}

export const requestNoticePost = async (formData: FormData) => {
  const response = await axiosMultipartInstance.post<NoticeWriteResponse>(
    '/notice/write',
    formData,
  )
  return response.data
}
