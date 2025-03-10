import CancelButton from '#shared/ui/button/Cancel/Cancel'
import CompleteButton from '#shared/ui/button/Complete/Complete'
import DeleteButton from '#shared/ui/button/Delete/Delete'
import EditButton from '#shared/ui/button/Edit/Edit'
import styles from './index.module.scss'

const ArticleManagementArea: React.FC = () => {
  return (
    <div className={styles['article-management-area']}>
      <EditButton />
      <CompleteButton />
      <CancelButton />
      <DeleteButton />
    </div>
  )
}

export default ArticleManagementArea
