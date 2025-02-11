import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockDetailRequest {
  idx: UUID
}

export interface MockDetailResponse {
  title: string
  description: string
  images: string[]
  writerNickname: string
  createdAt: string
  quizCount: number
  isSolved: boolean
}

export const requestMockDetail = async (request: MockDetailRequest) => {
  const response = await axiosInstance.get<MockDetailResponse>(
    `/mock/${request.idx}`,
  )
  return response.data
}
