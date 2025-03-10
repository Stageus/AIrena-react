import { forwardRef } from 'react'
import styles from './Content.module.scss'

interface ContentProps {
  rank: number
  tier: 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE'
  nickname: string
  score: number
}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ rank, tier, nickname, score }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles['tier-area']} ${styles[tier + '-background']}`}
      >
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
          <div className={styles['total-score']}>{score}</div>
        </div>
      </div>
    )
  },
)
