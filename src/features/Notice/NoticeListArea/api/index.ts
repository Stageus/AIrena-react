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
  const params = {
    current: request.current,
    display: request.display,
    ...(request.title != null && { title: request.title }),
  }
  const response = await axiosInstance.get<NoticeListResponse>(`/notice/list`, {
    params,
  })
  return response.data
}
