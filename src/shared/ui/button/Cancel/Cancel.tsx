import { ReactComponent as CancelIcon } from '#assets/icons/cancel_icon.svg'
import React from 'react'
import styles from './Cancel.module.scss'

interface CancelProps {
  onClick: () => void
}

export const Cancel: React.FC<CancelProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles['cancel-button']}>
      <CancelIcon className={styles['cancel-icon']} />
      <div className={styles['text']}>취소</div>
    </div>
  )
}
