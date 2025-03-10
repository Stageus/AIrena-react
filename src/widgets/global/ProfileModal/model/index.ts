import { goLoginPage } from '#shared/libs'
import { requestLogout } from '../api'

export const logoutWithNavigate = () => {
  const fetchData = async () => {
    const result = await requestLogout()
    if (result.status === 200) {
      goLoginPage()
    }
  }

  fetchData()
}
