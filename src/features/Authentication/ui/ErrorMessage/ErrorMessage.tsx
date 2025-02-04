import React from 'react'
import { ErrorMessageProps } from './ErrorMessage.types'
import styles from './ErrorMessage.module.css'

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles['error-message']}>{message}</p>
}

export default ErrorMessage
