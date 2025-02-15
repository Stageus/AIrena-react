import axiosInstance from '#shared/api/axiosInstance'

export const requestSendEmailFromToken = async () => {
  return await axiosInstance.get<void>('/member/send-email')
}
