import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockListRequest {
  title: string
  current: number
  display: number
  sort: string
}

export interface MockListResponse {
  firstPageNumber: number
  currentPageNumber: number
  lastPageNumber: number
  prevPageExist: boolean
  nextPageExist: boolean
  mocks: {
    idx: UUID
    title: string
    writerNickname: string
    createdAt: string
    likeCount: number
  }[]
}

export const requestMockList = async (request: MockListRequest) => {
  const params = {
    current: request.current,
    display: request.display,
    ...(request.sort != null && { sort: request.sort }),
    ...(request.title != null && { title: request.title }),
  }
  const response = await axiosInstance.get<MockListResponse>(`/mock/list`, {
    params,
  })
  return response.data
}
