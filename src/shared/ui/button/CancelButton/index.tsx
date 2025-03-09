import { ReactComponent as CancelIcon } from '#assets/icons/cancel_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface CancelButtonProps {
  onClick: () => void
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles['cancel-button']}>
      <CancelIcon className={styles['cancel-icon']} />
      <div className={styles['text']}>취소</div>
    </div>
  )
}

export default CancelButton
