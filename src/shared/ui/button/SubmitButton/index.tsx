import { ReactComponent as SubmitIcon } from '#assets/icons/submit_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface SubmitButtonProps {
  onClick: () => Promise<void>
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles['submit-button']}>
      <SubmitIcon className={styles['submit-icon']} />
      <div className={styles['text']}>등록</div>
    </div>
  )
}

export default SubmitButton
