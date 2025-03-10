import { CancelIcon } from '#shared/icons'
import React from 'react'
import styles from './CancelButton.module.scss'

interface CancelButtonProps {
  onClick?: () => void
}

export const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles['cancel-button']}>
      <CancelIcon className={styles['cancel-icon']} />
      <div className={styles['text']}>취소</div>
    </div>
  )
}
