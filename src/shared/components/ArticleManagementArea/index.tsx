import CancelButton from '#shared/components/CancelButton'
import CompleteButton from '#shared/components/CompleteButton'
import DeleteButton from '#shared/components/DeleteButton'
import EditButton from '#shared/components/EditButton'
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
