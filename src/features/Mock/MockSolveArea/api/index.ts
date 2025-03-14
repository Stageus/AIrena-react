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
}

export const requestMockQuiz = async (request: MockQuizRequest) => {
  const response = await axiosInstance.get<MockQuizResponse>(
    `/mock/quiz/${request.idx}`,
  )
  return response.data
}

export interface MockAnswerRequest {
  singleChoiceAnswer: number | null
  textAnswer: string | null
}

export const requestQuizAnswer = async (
  idx: UUID,
  request: MockAnswerRequest,
) => {
  return await axiosInstance.post<void>(`/mock/quiz/${idx}`, request)
}
