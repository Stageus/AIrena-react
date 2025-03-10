import { Cancel, Submit } from '#shared/ui'
import styles from './index.module.scss'

interface ArticleWriteFooterProps {
  onCancelClick: () => void
  onSubmitClick: () => Promise<void>
}

const ArticleWriteFooter: React.FC<ArticleWriteFooterProps> = ({
  onCancelClick,
  onSubmitClick,
}) => {
  return (
    <div className={styles['write-footer']}>
      <Cancel onClick={onCancelClick}></Cancel>
      <Submit onClick={onSubmitClick}></Submit>
    </div>
  )
}
export default ArticleWriteFooter
