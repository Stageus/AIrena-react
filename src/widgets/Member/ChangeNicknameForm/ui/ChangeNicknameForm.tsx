import SharedButton from '#shared/ui/button/StandardButton'
import NicknameInput from '#shared/ui/input/NicknameInput'
import { useState } from 'react'
import { changeNicknameWithNavigation } from '../model'
import styles from './ChangeNicknameForm.module.scss'

export const ChangeNicknameForm: React.FC = () => {
  const [nickname, setNickname] = useState('')

  return (
    <div className={styles['change-nickname-form']}>
      <NicknameInput setNickname={setNickname} />
      <SharedButton
        name="확인"
        onClick={() => {
          changeNicknameWithNavigation(nickname)
        }}
      />
    </div>
  )
}
