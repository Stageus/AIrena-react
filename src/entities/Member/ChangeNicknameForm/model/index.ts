import { useNavigate } from 'react-router-dom'
import { requestChangeNickname } from '../api'

const navigate = useNavigate()

export const changeNickname = (nickname: string) => {
  const fetch = async () => {
    const result = await requestChangeNickname({ nickname })
    if (result.status === 200) {
      alert('닉네임 변경이 완료되었습니다.')
      navigate('/mock/list')
    }
  }
  fetch()
}
