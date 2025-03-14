import React from 'react'
import styles from './index.module.scss'

export const TotalRankLegend: React.FC = () => {
  return (
    <div className={styles['total-rank-legend']}>
      <div className={styles['grade-output-box']}>
        <div className={styles['grade']}>순위</div>
      </div>
      <div className={styles['tier-output-box']}>
        <div className={styles['text-tier']}>티어</div>
      </div>
      <div className={styles['nickname-output-box']}>
        <div className={styles['text-nickname']}>닉네임</div>
      </div>
      <div className={styles['score-output-box']}>
        <div className={styles['text-score']}>점수</div>
      </div>
    </div>
  )
}

export default TotalRankLegend
