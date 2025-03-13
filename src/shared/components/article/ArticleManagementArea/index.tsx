import DeleteButton from '#shared/components/button/DeleteButton'
import EditButton from '#shared/components/button/EditButton'
import React from 'react'
import styles from './index.module.scss'

interface ArticleManagementAreaProps {
  onEditButtonClick: () => void
}

const ArticleManagementArea: React.FC<ArticleManagementAreaProps> = ({
  onEditButtonClick,
}) => {
  return (
    <div className={styles['article-management-area']}>
      <EditButton onClick={onEditButtonClick} />
      <DeleteButton />
    </div>
  )
}

export default ArticleManagementArea
