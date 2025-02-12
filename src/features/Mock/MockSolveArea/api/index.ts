import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockQuizRequest {
  idx: UUID
}

export interface MockQuizResponse {
  type: 'SINGLE_CHOICE' | 'TEXT'
  title: string
  description: string
  singleChoiceChoices: string[] | null
  currentQuizIndex: number
  totalQuizCount: number
}

export const requestMockQuiz = async (request: MockQuizRequest) => {
  const response = await axiosInstance.get<MockQuizResponse>(
    `/mock/solve/${request.idx}`,
  )
  return response.data
}

export interface MockAnswerRequest {
  singleChoiceAnswer: number | null
  textAnswer: string | null
}

export const requestMockAnswer = async (
  idx: UUID,
  request: MockAnswerRequest,
) => {
  await axiosInstance.post<void>(`/mock/solve/${idx}`, request)
}
