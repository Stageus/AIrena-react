import { ReactComponent as IdIcon } from '#assets/icons/id_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface IdInputProps {
  setId: (text: string) => void
}

const IdInput: React.FC<IdInputProps> = ({ setId }) => {
  return (
    <div className={styles['id-input-box']}>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="아이디"
        className={styles['id-text']}
      />
      <IdIcon className={styles['id-icon']} />
    </div>
  )
}

export default IdInput
