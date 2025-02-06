import { ReactComponent as DeleteIcon } from '#assets/icons/delete_icon.svg'
import React from 'react'
import styles from './DeleteButton.module.css'

const DeleteButton: React.FC = () => {
  return (
    <div className={styles['delete-button']}>
      <DeleteIcon className={styles['delete-icon']} />
      <div className={styles['text']}>삭제</div>
    </div>
  )
}

export default DeleteButton
