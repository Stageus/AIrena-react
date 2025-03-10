import { SubmitIcon } from '#shared/icons'
import React from 'react'
import styles from './Submit.module.scss'

interface SubmitProps {
  onClick: () => Promise<void>
}

export const Submit: React.FC<SubmitProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles['submit-button']}>
      <SubmitIcon className={styles['submit-icon']} />
      <div className={styles['text']}>등록</div>
    </div>
  )
}
