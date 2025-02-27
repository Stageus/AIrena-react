import styles from './index.module.scss'

interface SubmittingProps {
  submitting: boolean
}

const Submitting: React.FC<SubmittingProps> = ({ submitting }) => {
  return (
    <div
      className={styles['loading-container']}
      style={{ display: submitting ? 'flex' : 'none' }}
    >
      <div className={styles['loading-area']}>
        <div className={styles['spinner']}></div>
      </div>
    </div>
  )
}

export default Submitting
