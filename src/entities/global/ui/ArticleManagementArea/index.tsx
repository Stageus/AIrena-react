import { CancelButton } from '#shared/ui/button/CancelButton/CancelButton'
import { CompleteButton } from '#shared/ui/button/CompleteButton/CompleteButton'
import { DeleteButton } from '#shared/ui/button/DeleteButton/DeleteButton'
import { EditButton } from '#shared/ui/button/EditButton/EditButton'
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
