import styles from './index.module.scss'

interface TotalRankAreaProps {
  rank: number
  tier: 'DIAMOND' | 'GOLD' | 'SILVER' | 'BRONZE'
  nickname: string
  totalScore: number
}

const TotalRankArea: React.FC<TotalRankAreaProps> = ({
  rank,
  tier,
  nickname,
  totalScore,
}) => {
  return (
    <div className={`${styles['tier-area']} ${styles[tier + '-background']}`}>
      <div className={styles['rank-box']}>
        <div className={styles['rank']}>{rank}</div>
      </div>
      <div className={styles['tier-box']}>
        <div className={`${styles[tier + '-tier-content']}`}>
          <div className={`${styles[tier + '-tier']}`}>{tier}</div>
        </div>
      </div>
      <div className={styles['nickname-box']}>
        <div className={styles['nickname']}>{nickname}</div>
      </div>
      <div className={styles['total-score-box']}>
        <div className={styles['total-score']}>{totalScore}</div>
      </div>
    </div>
  )
}

export default TotalRankArea
