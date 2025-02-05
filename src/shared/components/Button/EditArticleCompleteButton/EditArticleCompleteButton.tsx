import React from 'react'
import styles from './EditArticleCompleteButton.module.css'

const EditArticleCompleteButton: React.FC = () => {
  return (
    <div className={styles['edit-article-complete-button']}>
      <svg id="96:5665" className={styles['complete-icon']}></svg>
      <div className={styles['text']}>확인</div>
    </div>
  )
}

export default EditArticleCompleteButton
