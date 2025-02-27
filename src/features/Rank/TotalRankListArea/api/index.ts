import axiosInstance from '#shared/api/axiosInstance'

export interface RankListRequest {
  current: number
}

export interface RankListResponse {
  ranks: {
    rank: number
    nickname: string
    score: number
    tier: 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE'
  }[]
}

export const requestRankList = async (request: RankListRequest) => {
  const response = await axiosInstance.get<RankListResponse>(
    `/rank/list?current=${request.current}`,
  )
  return response.data
}
