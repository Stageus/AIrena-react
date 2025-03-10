import { IdIcon } from '#shared/icons'
import React from 'react'
import styles from './IdInput.module.scss'

interface IdInputProps {
  setId: (text: string) => void
}

export const IdInput: React.FC<IdInputProps> = ({ setId }) => {
  return (
    <div className={styles['id-input-box']}>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="아이디"
        className={styles['id-text']}
      />
      <IdIcon className={styles['id-icon']} />
    </div>
  )
}
