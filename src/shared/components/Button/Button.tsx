import React from 'react'
import { ButtonProps } from './Button.types'
import styles from './Button.module.css'

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
