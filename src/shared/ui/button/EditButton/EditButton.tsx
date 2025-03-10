import { EditIcon } from '#shared/icons'
import React from 'react'
import styles from './EditButton.module.scss'

export const EditButton: React.FC = () => {
  return (
    <div className={styles['edit-button']}>
      <EditIcon className={styles['edit-icon']} />
      <div className={styles['text']}>수정</div>
    </div>
  )
}
