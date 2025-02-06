import CancelButton from '#shared/components/button/CancelButton'
import CompleteButton from '#shared/components/button/CompleteButton'
import DeleteButton from '#shared/components/button/DeleteButton'
import EditButton from '#shared/components/button/EditButton'
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
