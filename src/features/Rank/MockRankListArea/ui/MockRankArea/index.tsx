import styles from './index.module.scss'

const MockRankArea: React.FC = () => {
  return (
    <div className={styles['mock-rank-area']}>
      <div className={styles['rank-output-area']}>
        <div className={styles['rank']}>15</div>
      </div>
      <div className={styles['nickname-output-area']}>
        <div className={styles['nickname']}>김스테이지어스</div>
      </div>
      <div className={styles['score-output-area']}>
        <div className={styles['score']}>850점</div>
      </div>
    </div>
  )
}
export default MockRankArea
