import DeleteButton from '#shared/components/button/DeleteButton'
import EditButton from '#shared/components/button/EditButton'
import styles from './index.module.scss'

interface ArticleManagementAreaProps {
  setEditMode: (editMode: boolean) => void
}

const ArticleManagementArea: React.FC<ArticleManagementAreaProps> = ({
  setEditMode,
}) => {
  return (
    <div className={styles['article-management-area']}>
      <EditButton setEditMode={setEditMode} />
      <DeleteButton />
    </div>
  )
}

export default ArticleManagementArea
