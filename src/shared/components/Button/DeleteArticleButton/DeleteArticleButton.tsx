import React from 'react'
import styles from './DeleteArticleButton.module.css'

const DeleteArticleButton: React.FC = () => {
  return (
    <div className={styles['delete-article-button']}>
      <svg id="96:5651" className={styles['delete-icon']}></svg>
      <div className={styles['text']}>삭제</div>
    </div>
  )
}

export default DeleteArticleButton
