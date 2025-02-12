import styles from './index.module.scss'

interface ProgressBarProps {
  current: number
  total: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className={styles['progress-bar']}>
      <div className={styles['content']}>
        <div className={styles['text']}>진행률</div>
        <div className={styles['number']}>
          {current}/{total}
        </div>
      </div>
      <div className={styles['full-bar']}>
        <div className={styles['current-bar']}></div>
      </div>
    </div>
  )
}
export default ProgressBar
