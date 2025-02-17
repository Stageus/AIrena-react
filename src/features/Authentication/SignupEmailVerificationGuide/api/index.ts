import axiosInstance from '#shared/api/axiosInstance'

export interface SendChangePasswordVerifyEmailResponse {
  email: string
}

export const requestSendSignupVerifyEmail = async (
  request: SendChangePasswordVerifyEmailResponse,
) => {
  return await axiosInstance.get<void>(
    `/member/signup/email?email=${request.email}`,
  )
}
