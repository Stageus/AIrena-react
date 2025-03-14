import React, { useState } from 'react'
import styles from './index.module.scss'

interface SearchFooterProps {
  setTitle: (title: string) => void
}
const SearchFooter: React.FC<SearchFooterProps> = ({ setTitle }) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className={styles['search-footer']}>
      <div className={styles['keyword-input']}>
        <input
          className={styles['text']}
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={100}
        />
      </div>
      <div
        onClick={() => setTitle(inputValue)}
        className={styles['search-button']}
      >
        <div className={styles['text-1']}>검색</div>
      </div>
    </div>
  )
}
export default SearchFooter
