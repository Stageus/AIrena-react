import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockQuizResultResponse {
  submitAnswer: string
  correctAnswer: string
  reason: string
  score: number
  maxScore: number
  nextQuizIdx: UUID
  mockIdx: UUID
}

export const requestMockQuizResult = async (
  idx: UUID,
): Promise<MockQuizResultResponse> => {
  const response = await axiosInstance.get<MockQuizResultResponse>(
    `/mock/quiz/${idx}/result`,
  )
  return response.data
}

export const requestMockAnswer = async (idx: UUID) => {
  await axiosInstance.post<void>(`/mock/${idx}/result`)
}
