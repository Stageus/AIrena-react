import { ReactComponent as EditIcon } from '#assets/icons/submit_icon.svg'
import React from 'react'
import styles from './Edit.module.scss'

export const Edit: React.FC = () => {
  return (
    <div className={styles['edit-button']}>
      <EditIcon className={styles['edit-icon']} />
      <div className={styles['text']}>수정</div>
    </div>
  )
}
