import MocktestDetailArea from '#features/Mocktest/ui/MocktestDetailArea/MocktestDetailArea'
import MocktestRankListArea from '#features/Rank/MocktestRank/ui/MocktestRankListArea/MocktestRankListArea'
import styles from './MockTestDetailPage.module.css'

const MocktestDetailPage: React.FC = () => {
  return (
    <div className={styles['mocktest-deatil-cotainer']}>
      <MocktestDetailArea />
      <MocktestRankListArea />
    </div>
  )
}
export default MocktestDetailPage
