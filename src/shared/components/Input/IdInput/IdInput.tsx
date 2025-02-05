import { ReactComponent as IdIcon } from '#assets/icons/id_icon.svg'
import React from 'react'
import styles from './IdInput.module.css'

const IdInput: React.FC = () => {
  return (
    <div className={styles['id-input-box']}>
      <div className={styles['id-text']}>아이디</div>
      <IdIcon className={styles['id-icon']} />
    </div>
  )
}

export default IdInput
