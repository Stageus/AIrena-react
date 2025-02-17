import axiosInstance from '#shared/api/axiosInstance'

export interface ProfileResponse {
  nickname: string
}

export const requestLogout = async () => {
  return await axiosInstance.get<void>('/member/logout')
}

export const requestProfile = async () => {
  return await axiosInstance.get<ProfileResponse>('/member/me/profile')
}
