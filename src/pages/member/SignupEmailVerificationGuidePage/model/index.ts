import { requestSendSignupVerifyEmail } from '../api'

export const sendSignupVerifyEmail = (email: string) => {
  const fetch = async () => {
    await requestSendSignupVerifyEmail({ email })
  }
  fetch()
}
