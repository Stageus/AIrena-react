import CancelButton from '#shared/components/button/CancelButton'
import SubmitButton from '#shared/components/button/EditButton'
import styles from './index.module.scss'

const WriteFooter: React.FC = ({}) => {
  return (
    <div className={styles['write-footer']}>
      <CancelButton></CancelButton>
      <SubmitButton></SubmitButton>
    </div>
  )
}
export default WriteFooter
