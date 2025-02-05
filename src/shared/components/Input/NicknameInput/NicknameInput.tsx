import { ReactComponent as NicknameIcon } from '#assets/icons/nickname_icon.svg'
import React from 'react'
import styles from './NicknameInput.module.css'

const NicknameInput: React.FC = () => {
  return (
    <div className={styles['nickname-input-box']}>
      <div className={styles['nickname-text']}>닉네임</div>
      <NicknameIcon className={styles['nickname-icon']} />
    </div>
  )
}

export default NicknameInput
