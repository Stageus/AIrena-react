import { UUID } from 'crypto'
import axiosInstance from './axiosInstance'

export interface LikePathRequest {
  idx: UUID
}

export const requestLike = async (request: LikePathRequest) => {
  const response = await axiosInstance.post<LikePathRequest>(
    `like/${request.idx}`,
  )
  return response
}

export const requestUnlike = async (request: LikePathRequest) => {
  const response = await axiosInstance.delete<LikePathRequest>(
    `like/${request.idx}`,
  )
  return response
}
