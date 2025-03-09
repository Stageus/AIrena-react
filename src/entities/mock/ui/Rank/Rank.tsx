import styles from './index.module.scss'

interface RankProps {
  rank: number
  nickname: string
  score: number
}

export const Rank: React.FC<RankProps> = ({ rank, nickname, score }) => {
  return (
    <div className={styles['mock-rank-area']}>
      <div className={styles['rank-output-area']}>
        <div className={styles['rank']}>{rank}</div>
      </div>
      <div className={styles['nickname-output-area']}>
        <div className={styles['nickname']}>{nickname}</div>
      </div>
      <div className={styles['score-output-area']}>
        <div className={styles['score']}>{score}점</div>
      </div>
    </div>
  )
}
