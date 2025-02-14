import axiosInstance from '#shared/api/axiosInstance'

interface RequestChangePassword {
  password: string
  passwordCheck: string
  token: string
}

export const requestChangePassword = async (request: RequestChangePassword) => {
  return await axiosInstance.patch<void>('/member/change/password', request)
}
