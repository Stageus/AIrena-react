import { ReactComponent as CompleteIcon } from '#assets/icons/complete_icon.svg'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './index.module.scss'

interface CompleteButtonProps {
  onCompleteClick: () => void
}

const CompleteButton: React.FC<CompleteButtonProps> = ({ onCompleteClick }) => {
  const location = useLocation()
  const pathname = location.pathname
  const pathParts = pathname.split('/').filter(Boolean)
  const category = pathParts[0]
  const idx = pathParts[1]

  if (!category || !idx) {
    return null
  }

  return (
    <div className={styles['complete-button']} onClick={onCompleteClick}>
      <CompleteIcon className={styles['complete-icon']} />
      <div className={styles['text']}>완료</div>
    </div>
  )
}

export default CompleteButton
