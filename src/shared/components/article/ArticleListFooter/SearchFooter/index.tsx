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
          value={inputValue} // input 값 바인딩
          onChange={(e) => setInputValue(e.target.value)} // 값 변경 시 상태 업데이트
        />
      </div>
      <div className={styles['search-button']}>
        <div
          className={styles['text-1']}
          onClick={() => setTitle(inputValue)} // 현재 input 값을 title에 전달
        >
          검색
        </div>
      </div>
    </div>
  )
}
export default SearchFooter
