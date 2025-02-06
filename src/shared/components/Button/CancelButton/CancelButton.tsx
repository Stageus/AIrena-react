import { ReactComponent as CancelIcon } from '#assets/icons/cancel_icon.svg'
import React from 'react'
import styles from './CancelButton.module.css'

const CancelButton: React.FC = () => {
  return (
    <div className={styles['cancel-button']}>
      <CancelIcon className={styles['cancel-icon']} />
      <div className={styles['text']}>취소</div>
    </div>
  )
}

export default CancelButton
