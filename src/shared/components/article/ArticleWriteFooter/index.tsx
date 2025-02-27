import CancelButton from '#shared/components/button/CancelButton'
import SubmitButton from '#shared/components/button/SubmitButton'
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
      <CancelButton onClick={onCancelClick}></CancelButton>
      <SubmitButton onClick={onSubmitClick}></SubmitButton>
    </div>
  )
}
export default ArticleWriteFooter
