import { NicknameIcon } from '#shared/icons'
import React from 'react'
import styles from './Nickname.module.scss'

interface NicknameProps {
  setNickname: (text: string) => void
}

export const Nickname: React.FC<NicknameProps> = ({ setNickname }) => {
  return (
    <div className={styles['nickname-input-box']}>
      <input
        type="text"
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임"
        className={styles['nickname-text']}
      />
      <NicknameIcon className={styles['nickname-icon']} />
    </div>
  )
}
