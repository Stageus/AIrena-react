import { goMockListPage } from '#shared/libs'
import { requestChangeNickname } from '../api'

export const changeNicknameWithNavigation = (nickname: string) => {
  const fetch = async () => {
    const result = await requestChangeNickname({ nickname })
    if (result.status === 200) {
      goMockListPage()
    }
  }
  fetch()
}
