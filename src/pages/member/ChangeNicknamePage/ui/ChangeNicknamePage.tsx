import { StandardButton } from '#shared/ui/button/StandardButton/StandardButton'
import { NicknameInput } from '#shared/ui/input/NicknameInput/NicknameInput'
import React, { useState } from 'react'
import { changeNicknameWithNavigation } from '../model'
import styles from './ChangeNicknamePage.module.scss'

export const ChangeNicknamePage: React.FC = () => {
  const [nickname, setNickname] = useState('')

  return (
    <div className={styles['narrow-background']}>
      <div className={styles['change-nickname-form']}>
        <NicknameInput setNickname={setNickname} />
        <StandardButton
          name="확인"
          onClick={() => {
            changeNicknameWithNavigation(nickname)
          }}
        />
      </div>
    </div>
  )
}
