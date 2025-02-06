import { ReactComponent as SubmitIcon } from '#assets/icons/submit_icon.svg'
import React from 'react'
import styles from './EditButton.module.css'

const SubmitButton: React.FC = () => {
  return (
    <div className={styles['submit-button']}>
      <SubmitIcon className={styles['submit-icon']} />
      <div className={styles['text']}>등록</div>
    </div>
  )
}

export default SubmitButton
