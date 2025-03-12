import axiosInstance from '#shared/api/axiosInstance'

export interface ProfileResponse {
  nickname: string
  role: 'ADMIN' | 'USER'
}

export const requestProfile = async () => {
  return await axiosInstance.get<ProfileResponse>('/member/me/profile')
}
