import axiosInstance from '#shared/api/axiosInstance'

interface FindPasswordRequest {
  id: string
  email: string
}

export const requestFindPassword = async (request: FindPasswordRequest) => {
  return await axiosInstance.post<void>('/member/find/password', request)
}
