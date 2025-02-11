import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockListRequest {
  current: number
  display: number
}

export interface MockListResponse {
  firstPageNumber: number
  currentPageNumber: number
  lastPageNumber: number
  mocks: {
    idx: UUID
    title: string
    writerNickname: string
    createdAt: string
    likeCount: number
  }[]
}

export const requestMockList = async (request: MockListRequest) => {
  const response = await axiosInstance.get<MockListResponse>(
    `/mock/list?current=${request.current}&display=${request.display}`,
  )
  return response.data
}
