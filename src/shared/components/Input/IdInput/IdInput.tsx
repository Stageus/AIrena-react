import { ReactComponent as IdIcon } from '#assets/icons/id_icon.svg'
import React from 'react'
import styles from './IdInput.module.css'

const IdInput: React.FC = () => {
  return (
    <div className={styles['component---']}>
      <div className={styles['text-']}>아이디</div>
      <IdIcon className={styles['path']} />
    </div>
  )
}

export default IdInput
