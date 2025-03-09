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

export interface RankListSearchRequest {
  current: number
  nickname: string | null
  tier: string | null
}

export const requestRankList = async (request: RankListRequest) => {
  const response = await axiosInstance.get<RankListResponse>(
    `/rank/list?current=${request.current}`,
  )
  return response.data
}

export const requestRankListSearch = async (request: RankListSearchRequest) => {
  const params = {
    current: request.current,
    ...(request.tier != null && { tier: request.tier }),
    ...(request.nickname != null && { nickname: request.nickname }),
  }
  const response = await axiosInstance.get<RankListResponse>(
    `/rank/list/search`,
    { params },
  )
  return response.data
}
