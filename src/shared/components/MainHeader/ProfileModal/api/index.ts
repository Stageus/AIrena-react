import axiosInstance from '#shared/api/axiosInstance'

export const requestLogout = async () => {
  return await axiosInstance.get<void>('/member/logout')
}
