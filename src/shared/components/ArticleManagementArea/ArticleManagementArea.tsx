import CancelButton from '../Button/CancelButton/CancelButton'
import CompleteButton from '../Button/CompleteButton/CompleteButton'
import DeleteButton from '../Button/DeleteButton/DeleteButton'
import EditButton from '../Button/EditButton/EditButton'
import styles from './ArticleManagementArea.module.css'

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
