import TotalRankListArea from '#features/Rank/TotalRankListArea/ui'
import styles from './index.module.scss'

const TotalRankPage: React.FC = () => {
  return (
    <div className={styles['total-rank-container']}>
      <TotalRankListArea />
    </div>
  )
}
export default TotalRankPage
