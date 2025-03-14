import React from 'react'
import styles from './index.module.scss'
import MockRankArea from './MockRankArea'

interface Rank {
  rank: number
  nickname: string
  score: number
}

interface RankListProps {
  ranks: Rank[]
}

const MockRankListArea: React.FC<RankListProps> = ({ ranks }) => {
  return (
    <div className={styles['mock-rank-list-area']}>
      <div className={styles['rank-text']}>
        <div className={styles['text']}>모의고사 랭킹</div>
      </div>
      <div className={styles['mock-rank-list-content']}>
        <div className={styles['mock-rank-legend']}>
          <div className={styles['span']}>
            <div className={styles['text-']}>순위</div>
          </div>
          <div className={styles['span-1']}>
            <div className={styles['text--1']}>닉네임</div>
          </div>
          <div className={styles['span-2']}>
            <div className={styles['text--2']}>점수</div>
          </div>
        </div>
        {ranks.map((rank, index) => (
          <MockRankArea key={index} rank={rank} />
        ))}
      </div>
    </div>
  )
}

export default MockRankListArea
