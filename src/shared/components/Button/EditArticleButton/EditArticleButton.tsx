import React from 'react'
import styles from './EditArticleButton.module.css'

const EditArticleButton: React.FC = () => {
  return (
    <div className={styles['edit-article-button']}>
      <svg id="96:5655" className={styles['edit-icon']}></svg>
      <div className={styles['text']}>수정</div>
    </div>
  )
}

export default EditArticleButton
