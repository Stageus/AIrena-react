import { ReactComponent as NicknameIcon } from '#assets/icons/nickname_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface NicknameInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NicknameInput: React.FC<NicknameInputProps> = ({ onChange }) => {
  return (
    <div className={styles['nickname-input-box']}>
      <input
        type="text"
        onChange={onChange}
        placeholder="닉네임"
        className={styles['nickname-text']}
        maxLength={12}
      />
      <NicknameIcon className={styles['nickname-icon']} />
    </div>
  )
}

export default NicknameInput
