import MockRankArea from './MockRankArea'
import styles from './index.module.scss'

const MockRankListArea: React.FC = () => {
  return (
    <div className={styles['mock-rank-list-area']}>
      <div className={styles['rank-text']}>
        <div className={styles['text']}>모의고사 순위</div>
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
          <MockRankArea />
        ))}
      </div>
    </div>
  )
}

export default MockRankListArea
