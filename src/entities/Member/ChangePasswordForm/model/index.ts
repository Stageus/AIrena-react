import { useNavigate } from 'react-router-dom'
import { requestChangePassword } from '../api'

const navigate = useNavigate()

export const changePassword = (
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
      navigate('/')
    }
  }

  fetchData()
}
