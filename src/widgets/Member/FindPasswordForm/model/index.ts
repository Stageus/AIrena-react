import { useNavigate } from 'react-router-dom'
import { requestFindPassword } from '../api'

export const findPasswordWithNavigation = (id: string, email: string) => {
  const fetch = async () => {
    const result = await requestFindPassword({ id, email })
    if (result.status === 200) {
      useNavigate()(`/find/password/email-verification-guide?email=${email}`)
    }
  }
  fetch()
}
