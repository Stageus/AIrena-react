import { ReactComponent as NicknameIcon } from '#assets/icons/nickname_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface NicknameInputProps {
  setNickname: (text: string) => void
}

const NicknameInput: React.FC<NicknameInputProps> = ({ setNickname }) => {
  return (
    <div className={styles['nickname-input-box']}>
      <input
        type="text"
        onChange={(e) => setNickname(e.target.value)}
        placeholder="아이디"
        className={styles['nickname-text']}
      />
      <NicknameIcon className={styles['nickname-icon']} />
    </div>
  )
}

export default NicknameInput
