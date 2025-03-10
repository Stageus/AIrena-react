import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface NoticeListRequest {
  current: number
  display: number
  title: string
}

export interface NoticeListResponse {
  firstPageNumber: number
  currentPageNumber: number
  lastPageNumber: number
  prevPageExist: boolean
  nextPageExist: boolean
  notices: {
    idx: UUID
    title: string
    writerNickname: string
    createdAt: string
  }[]
}

export const requestNoticeList = async (request: NoticeListRequest) => {
  const response = await axiosInstance.get<NoticeListResponse>(
    `/notice/list/?current=${request.current}&display=${request.display}&title=${request.title}`,
  )
  return response
}
