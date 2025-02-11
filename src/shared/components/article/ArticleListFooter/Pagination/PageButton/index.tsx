import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

interface PageButtonProps {
  isSelected: boolean
  number: number
}

const PageButton: React.FC<PageButtonProps> = ({ isSelected, number }) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/mock/list?current=${number}`)
  }

  return (
    <div
      onClick={onClick}
      className={`${styles['page-button']} ${isSelected ? styles['button-selected'] : ''}`}
    >
      <div
        className={`${styles['number']} ${isSelected ? styles['number-selected'] : ''}`}
      >
        {number}
      </div>
    </div>
  )
}

export default PageButton
