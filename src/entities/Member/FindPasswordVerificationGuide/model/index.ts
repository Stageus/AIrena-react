import { requestSendChangePasswordVerifyEmail } from '../api'

export const sendChangePasswordVerifyEmail = (email: string) => {
  const fetch = async () => {
    await requestSendChangePasswordVerifyEmail({ email })
  }
  fetch()
}
