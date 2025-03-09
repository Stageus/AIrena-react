import axiosInstance from '#shared/api/axiosInstance'
import { UUID } from 'crypto'

export interface MockResultRequest {
  idx: UUID
}

export interface MockResultResponse {
  score: number
  maxScore: number
  topPercentile: number
}

export const requestMockResult = async (request: MockResultRequest) => {
  const response = await axiosInstance.get<MockResultResponse>(
    `/mock/${request.idx}/result`,
  )
  return response.data
}
