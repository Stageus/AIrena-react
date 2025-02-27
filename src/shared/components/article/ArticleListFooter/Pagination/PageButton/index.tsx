import React from 'react'
import styles from './index.module.scss'

interface PageButtonProps {
  setCurrent: (current: number) => void
  isSelected: boolean
  number: number
}

const PageButton: React.FC<PageButtonProps> = ({
  setCurrent,
  isSelected,
  number,
}) => {
  const onClick = () => {
    setCurrent(number)
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
