import styles from './index.module.scss'

interface MockRankAreaProps {
  rank: {
    rank: number
    nickname: string
    score: number
  }
}

const MockRankArea: React.FC<MockRankAreaProps> = ({ rank }) => {
  return (
    <div className={styles['mock-rank-area']}>
      <div className={styles['rank-output-area']}>
        <div className={styles['rank']}>{rank.rank}</div>
      </div>
      <div className={styles['nickname-output-area']}>
        <div className={styles['nickname']}>{rank.nickname}</div>
      </div>
      <div className={styles['score-output-area']}>
        <div className={styles['score']}>{rank.score}점</div>
      </div>
    </div>
  )
}
export default MockRankArea
