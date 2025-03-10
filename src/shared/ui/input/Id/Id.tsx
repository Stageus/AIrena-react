import { IdIcon } from '#shared/icons'
import React from 'react'
import styles from './Id.module.scss'

interface IdProps {
  setId: (text: string) => void
}

export const Id: React.FC<IdProps> = ({ setId }) => {
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
