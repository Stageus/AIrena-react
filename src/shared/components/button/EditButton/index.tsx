import { ReactComponent as EditIcon } from '#assets/icons/submit_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface setEditMode {
  setEditMode: (editMode: boolean) => void
}

const EditButton: React.FC<setEditMode> = ({ setEditMode }) => {
  return (
    <div className={styles['edit-button']} onClick={() => setEditMode(true)}>
      <EditIcon className={styles['edit-icon']} />
      <div className={styles['text']}>수정</div>
    </div>
  )
}

export default EditButton
