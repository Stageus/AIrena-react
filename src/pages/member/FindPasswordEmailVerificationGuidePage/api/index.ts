import axiosInstance from '#shared/api/axiosInstance'

export interface SendChangePasswordVerifyEmailResponse {
  email: string
}

export const requestSendChangePasswordVerifyEmail = async (
  request: SendChangePasswordVerifyEmailResponse,
) => {
  return await axiosInstance.get<void>(
    `/member/change/password/email?email=${request.email}`,
  )
}
