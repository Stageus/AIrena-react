import axiosInstance from '#shared/api/axiosInstance'

export interface NormalLoginRequest {
  id: string
  password: string
}

export interface MockQuizResponse {
  type: 'SINGLE_CHOICE' | 'TEXT'
  title: string
  description: string
  singleChoiceChoices: string[] | null
  currentQuizIndex: number
  totalQuizCount: number
}

export const requestNormalLogin = async (request: NormalLoginRequest) => {
  return await axiosInstance.post<MockQuizResponse>(
    '/member/login/normal',
    request,
  )
}

export const requestCheckLogin = async () => {
  return await axiosInstance.get<void>('/member/login/check')
}
