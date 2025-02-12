import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface GradingResultResponse {
  submitAnswer: string
  correctAnswer: string
  reason: string
  score: number
  maxScore: number
  currentQuizIndex: number
  totalQuizCount: number
}

export const requestGradingResult = async (
  idx: UUID,
): Promise<GradingResultResponse> => {
  const response = await axiosInstance.get<GradingResultResponse>(
    `/mock/grading/${idx}`,
  )
  return response.data
}
