import axiosInstance from '#shared/api/axiosInstance'

export interface SingupRequest {
  id: string
  password: string
  passwordCheck: string
  email: string
}

export const requestSignup = async (request: SingupRequest) => {
  return await axiosInstance.post<void>('/member/signup', request)
}
