import React from 'react'
import styles from './index.module.scss'

interface PageButtonProps {
  isSelected: boolean
  number: number
}

const PageButton: React.FC<PageButtonProps> = ({ isSelected, number }) => {
  return (
    <div
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
