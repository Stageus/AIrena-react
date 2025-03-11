import {
  requestChangeNickname,
  requestChangePassword,
} from '#entities/member/api/change'
import { goMockListPage, goRootPage } from '#shared/libs'

export const changeNicknameWithNavigation = (nickname: string) => {
  const fetch = async () => {
    const result = await requestChangeNickname({ nickname })
    if (result.status === 200) {
      goMockListPage()
    }
  }
  fetch()
}

export const changePasswordWithNavigation = (
  password: string,
  passwordCheck: string,
  token: string,
) => {
  const fetchData = async () => {
    const result = await requestChangePassword({
      password,
      passwordCheck,
      token,
    })
    if (result.status === 200) {
      alert('비밀번호가 변경되었습니다. 다시 로그인 해주세요.')
      goRootPage()
    }
  }

  fetchData()
}
