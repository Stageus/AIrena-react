import React from 'react'
import styles from './index.module.scss'

interface StandardButtonProps {
  name: string
  onClick?: () => void
  type?: 'submit' | 'button'
}

const StandardButton: React.FC<StandardButtonProps> = ({
  name,
  onClick,
  type = 'button',
}) => {
  return (
    <button type={type} onClick={onClick} className={styles['standard-button']}>
      {name}
    </button>
  )
}

export default StandardButton
