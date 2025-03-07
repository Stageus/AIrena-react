import SharedButton from '#shared/components/button/StandardButton'
import NicknameInput from '#shared/components/input/NicknameInput'
import { useState } from 'react'
import { changeNickname } from '../model'
import styles from './ChangeNicknameForm.module.scss'

export const ChangeNicknameForm: React.FC = () => {
  const [nickname, setNickname] = useState('')

  return (
    <div className={styles['change-nickname-form']}>
      <NicknameInput setNickname={setNickname} />
      <SharedButton
        name="확인"
        onClick={() => {
          changeNickname(nickname)
        }}
      />
    </div>
  )
}
