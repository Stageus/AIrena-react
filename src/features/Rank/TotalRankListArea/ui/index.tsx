import styles from './index.module.scss'
import TotalRankArea from './TotalRankArea'
import TotalRankHeader from './TotalRankHeader'
import TotalRankLegend from './TotalRankLegend'

const TotalRankListArea: React.FC = () => {
  return (
    <div className={styles['total-rank-area']}>
      <TotalRankHeader />
      <TotalRankLegend />
      <div className={styles['rank-list-area']}>
        <TotalRankArea
          rank={1}
          tier="DIAMOND"
          nickname="김스테이지어스"
          totalScore={1000}
        />
        <TotalRankArea
          rank={2}
          tier="GOLD"
          nickname="이스테이지어스"
          totalScore={800}
        />
        <TotalRankArea
          rank={3}
          tier="SILVER"
          nickname="박스테이지어스"
          totalScore={600}
        />
        <TotalRankArea
          rank={4}
          tier="BRONZE"
          nickname="최스테이지어스"
          totalScore={400}
        />
      </div>
    </div>
  )
}

export default TotalRankListArea
