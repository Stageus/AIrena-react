import { ReactComponent as CompleteIcon } from '#assets/icons/complete_icon.svg'
import React from 'react'
import styles from './CompleteButton.module.css'

const CompleteButton: React.FC = () => {
  return (
    <div className={styles['complete-button']}>
      <CompleteIcon className={styles['complete-icon']} />
      <div className={styles['text']}>완료</div>
    </div>
  )
}

export default CompleteButton
