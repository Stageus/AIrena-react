import { ReactComponent as EditIcon } from '#assets/icons/submit_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface EditButtonProps {
  onClick: () => void
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <div className={styles['edit-button']} onClick={onClick}>
      <EditIcon className={styles['edit-icon']} />
      <div className={styles['text']}>수정</div>
    </div>
  )
}

export default EditButton
