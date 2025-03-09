import SharedButton from '#shared/ui/button/StandardButton'
import NicknameInput from '#shared/ui/input/NicknameInput'
import React, { useState } from 'react'
import { changeNicknameWithNavigation } from '../model'
import styles from './index.module.scss'

export const ChangeNicknamePage: React.FC = () => {
  const [nickname, setNickname] = useState('')

  return (
    <div className={styles['narrow-background']}>
      <div className={styles['change-nickname-form']}>
        <NicknameInput setNickname={setNickname} />
        <SharedButton
          name="확인"
          onClick={() => {
            changeNicknameWithNavigation(nickname)
          }}
        />
      </div>
    </div>
  )
}
