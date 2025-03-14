import { ReactComponent as IdIcon } from '#assets/icons/id_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface IdInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const IdInput: React.FC<IdInputProps> = ({ onChange }) => {
  return (
    <div className={styles['id-input-box']}>
      <input
        type="text"
        onChange={onChange}
        placeholder="아이디"
        className={styles['id-text']}
        maxLength={16}
      />
      <IdIcon className={styles['id-icon']} />
    </div>
  )
}

export default IdInput
