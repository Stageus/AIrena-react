import CancelButton from '#shared/components/button/CancelButton'
import CompleteButton from '#shared/components/button/CompleteButton'
import React from 'react'
import styles from './index.module.scss'

interface ArticleEditButtonsProps {
  setEditMode: (mode: boolean) => void
  onCompleteClick: () => void
}

const ArticleEditButtons: React.FC<ArticleEditButtonsProps> = ({
  setEditMode,
  onCompleteClick,
}) => {
  return (
    <div className={styles['article-management-area']}>
      <CompleteButton onCompleteClick={onCompleteClick} />
      <CancelButton setEditMode={setEditMode} />
    </div>
  )
}

export default ArticleEditButtons
