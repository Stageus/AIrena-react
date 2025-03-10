import { DeleteIcon } from '#shared/icons'
import React from 'react'
import styles from './Delete.module.scss'

export const Delete: React.FC = () => {
  return (
    <div className={styles['delete-button']}>
      <DeleteIcon className={styles['delete-icon']} />
      <div className={styles['text']}>삭제</div>
    </div>
  )
}
