import axiosInstance from '#shared/api/axiosInstance'

interface RequestSignupVerify {
  token: string
}

export const requestSignupVerify = async (request: RequestSignupVerify) => {
  return await axiosInstance.post<void>('/member/signup/verify', request)
}
