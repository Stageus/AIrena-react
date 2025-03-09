import CancelButton from '#shared/ui/button/CancelButton'
import CompleteButton from '#shared/ui/button/CompleteButton'
import DeleteButton from '#shared/ui/button/DeleteButton'
import EditButton from '#shared/ui/button/EditButton'
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
