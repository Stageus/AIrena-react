import CancelButton from '#shared/components/CancelButton'
import SubmitButton from '#shared/components/EditButton'
import styles from './WriteFooter.module.css'

const WriteFooter: React.FC = ({}) => {
  return (
    <div className={styles['write-footer']}>
      <CancelButton></CancelButton>
      <SubmitButton></SubmitButton>
    </div>
  )
}
export default WriteFooter
