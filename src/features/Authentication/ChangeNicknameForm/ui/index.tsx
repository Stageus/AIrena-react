import SharedButton from '#shared/components/button/StandardButton'
import { ErrorMessage } from '#shared/components/ErrorMessage'
import NicknameInput from '#shared/components/input/NicknameInput'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestChangeNickname } from '../api'
import styles from './index.module.scss'

const ChangeNicknameForm: React.FC = () => {
  const [nickname, setNickname] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const navigate = useNavigate()

  const validateNickname = (newNickname: string) => {
    if (newNickname.length > 12 || newNickname.length < 2) {
      setErrorMessage('닉네임은 2~12자 이내로 입력해주세요.')
      return false
    }
    setErrorMessage(null)
    return true
  }

  const handleClick = () => {
    if (!validateNickname(nickname)) {
      return
    }
    const fetch = async () => {
      const result = await requestChangeNickname({ nickname })
      if (result.status === 200) {
        alert('닉네임 변경이 완료되었습니다.')
        navigate('/mock/list')
      }
    }
    fetch()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value
    setNickname(newNickname)
    validateNickname(newNickname)
  }

  return (
    <div className={styles['change-nickname-form']}>
      <NicknameInput onChange={onChange} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <SharedButton name="확인" onClick={handleClick} />
    </div>
  )
}

export default ChangeNicknameForm
