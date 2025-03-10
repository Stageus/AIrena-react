import { SubmitIcon } from '#shared/icons'
import React from 'react'
import styles from './SubmitButton.module.scss'

interface SubmitButtonProps {
  onClick: () => Promise<void>
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles['submit-button']}>
      <SubmitIcon className={styles['submit-icon']} />
      <div className={styles['text']}>등록</div>
    </div>
  )
}
