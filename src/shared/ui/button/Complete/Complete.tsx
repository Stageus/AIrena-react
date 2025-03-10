import { ReactComponent as CompleteIcon } from '#assets/icons/complete_icon.svg'
import React from 'react'
import styles from './Complete.module.scss'

export const Complete: React.FC = () => {
  return (
    <div className={styles['complete-button']}>
      <CompleteIcon className={styles['complete-icon']} />
      <div className={styles['text']}>완료</div>
    </div>
  )
}
