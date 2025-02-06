import CancelButton from '#shared/components/Button/CancelButton/CancelButton'
import SubmitButton from '#shared/components/Button/EditButton/EditButton'
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
