import { Rank } from '../Rank/Rank'
import styles from './RankList.module.scss'

export const RankList: React.FC = () => {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <Rank key={index} rank={1} nickname="김스테이지어스" score={850} />
        ))}
      </div>
    </div>
  )
}
