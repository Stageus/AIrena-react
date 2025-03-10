import { CompleteIcon } from '#shared/icons'
import React from 'react'
import styles from './CompleteButton.module.scss'

export const CompleteButton: React.FC = () => {
  return (
    <div className={styles['complete-button']}>
      <CompleteIcon className={styles['complete-icon']} />
      <div className={styles['text']}>완료</div>
    </div>
  )
}
