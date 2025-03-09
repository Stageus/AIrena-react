import { goLoginRedirect } from '#shared/libs'
import { requestCheckLogin, requestNormalLogin } from '../api'

export const checkLoginWithNavigate = async () => {
  const result = await requestCheckLogin()
  if (result.status === 200) {
    goLoginRedirect()
  }
}

export const normalLoginWithNavigate = (id: string, password: string) => {
  const fetchData = async () => {
    const result = await requestNormalLogin({ id, password })
    if (result.status === 200) {
      goLoginRedirect()
    }
  }

  fetchData()
}
