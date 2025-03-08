import { useNavigate } from 'react-router-dom'
import { requestFindPassword } from '../api'

const goEmailVerificationGuidePage = (email: string) => {
  useNavigate()(`/find/password/email-verification-guide?email=${email}`)
}

export const findPasswordWithNavigation = (id: string, email: string) => {
  const fetch = async () => {
    const result = await requestFindPassword({ id, email })
    if (result.status === 200) {
      goEmailVerificationGuidePage(email)
    }
  }
  fetch()
}
