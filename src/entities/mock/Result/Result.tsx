import styles from './Result.module.scss'

interface ResultProps {
  score: number
  maxScore: number
  topPercentile: number
}

export const Result: React.FC<ResultProps> = ({
  score,
  maxScore,
  topPercentile,
}) => {
  return (
    <div className={styles['mock-result-output-box']}>
      <div className={styles['total-score-output-content']}>
        <div className={styles['total-score']}>
          <div className={styles['total-score-1']}>{score}</div>
          <div className={styles['divisor']}>/</div>
          <div className={styles['perfect-score']}>{maxScore}</div>
        </div>
        <div className={styles['text-1']}>총점</div>
      </div>
      <div className={styles['top-rate-output-content']}>
        <div className={styles['top-rate']}>상위 {topPercentile}%</div>
        <div className={styles['text-2']}>백분위</div>
      </div>
    </div>
  )
}
