import axiosInstance from '#shared/api/axiosInstance'
import axiosMultipartInstance from '#shared/api/axiosMultipartInstance'
import { UUID } from 'crypto'

export interface MockPathRequest {
  idx: UUID
}

export interface MockDetailResponse {
  title: string
  description: string
  likeCount: number
  images: string[]
  writerNickname: string
  createdAt: string
  quizCount: number
  firstQuizIdx: UUID
  ranks: {
    rank: number
    nickname: string
    score: number
  }[]
}

export interface MockIndividualResponse {
  owner: boolean
  admin: boolean
  solved: boolean
  pushLike: boolean
}

export const requestMockDetail = async (request: MockPathRequest) => {
  const response = await axiosInstance.get<MockDetailResponse>(
    `/mock/${request.idx}`,
  )
  return response.data
}

export const requestMocIndividual = async (request: MockPathRequest) => {
  const response = await axiosInstance.get<MockIndividualResponse>(
    `/mock/${request.idx}/individual`,
  )
  return response.data
}

export const requestMockEdit = async (idx: UUID, formData: FormData) => {
  const response = await axiosMultipartInstance.patch<MockDetailResponse>(
    `/mock/${idx}`,
    formData,
  )
  return response.data
}
