import axiosInstance from '#shared/api/axiosInstance'

export interface RankListRequest {
  current: number
  nickname: string | null
  tier: string | null
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
  const params = {
    current: request.current,
    ...(request.tier != null && { tier: request.tier }),
    ...(request.nickname != null && { nickname: request.nickname }),
  }
  const response = await axiosInstance.get<RankListResponse>(`/rank/list`, {
    params,
  })
  return response
}
