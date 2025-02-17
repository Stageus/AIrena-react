import SharedButton from '#shared/components/button/StandardButton'
import NicknameInput from '#shared/components/input/NicknameInput'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestChangeNickname } from '../api'
import styles from './index.module.scss'

const ChangeNicknameForm: React.FC = () => {
  const [nickname, setNickname] = useState('')

  const navigate = useNavigate()

  const handleClick = () => {
    const fetch = async () => {
      const result = await requestChangeNickname({ nickname })
      if (result.status === 200) {
        alert('닉네임 변경이 완료되었습니다.')
        navigate('/mock/list')
      }
    }
    fetch()
  }
  return (
    <div className={styles['change-nickname-form']}>
      <NicknameInput setNickname={setNickname} />
      <SharedButton name="확인" onClick={handleClick} />
    </div>
  )
}

export default ChangeNicknameForm
