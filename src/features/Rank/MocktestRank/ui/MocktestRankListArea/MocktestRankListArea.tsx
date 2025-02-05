import MocktestRankArea from '../MocktestRankArea/MocktestRanArea'
import styles from './MocktestRankListArea.module.css'

const MocktestRankListArea = ({}) => {
  return (
    <div className={styles['mocktest-rank-list-container']}>
      <div className={styles['rank-text']}>
        <div className={styles['text-5']}>모의고사 순위</div>
      </div>
      <div className={styles['mocktest-rank-list-area']}>
        <div className={styles['mocktest-rank-legend']}>
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
        {Array.from({ length: 15 }, (_, index) => (
          <MocktestRankArea />
        ))}
      </div>
    </div>
  )
}

export default MocktestRankListArea
