import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface NoticeDetailRequest {
  idx: UUID
}

export interface NoticeDetailResponse {
  title: string
  content: string
  images: string[]
  writerNickname: string
  createdAt: string
}

export const requestNoticeDetail = async (request: NoticeDetailRequest) => {
  const response = await axiosInstance.get<NoticeDetailResponse>(
    `/notice/${request.idx}`,
  )
  return response.data
}

export const requestNoticeEdit = async (idx: UUID, formData: FormData) => {
  await axiosInstance.patch(`/notice/${idx}`, formData)
}
