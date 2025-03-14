import React from 'react'
import styles from './index.module.scss'

interface StandardButtonProps {
  name: string
  onClick: () => void
}

const StandardButton: React.FC<StandardButtonProps> = ({ name, onClick }) => {
  return (
    <div onClick={onClick} className={styles['standard-button']}>
      <div className={styles['standard-button-text']}>{name}</div>
    </div>
  )
}

export default StandardButton
