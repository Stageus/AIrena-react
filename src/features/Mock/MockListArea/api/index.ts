import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockListRequest {
  current: number
  display: number
}

export interface MockListSearchRequest {
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
  const response = await axiosInstance.get<MockListResponse>(
    `/mock/list?current=${request.current}&display=${request.display}`,
  )
  return response.data
}

export const requestMockListSearch = async (request: MockListSearchRequest) => {
  const response = await axiosInstance.get<MockListResponse>(
    `/mock/list/search?title=${request.title}&current=${request.current}&display=${request.display}&sort=${request.sort}`,
  )
  return response.data
}
