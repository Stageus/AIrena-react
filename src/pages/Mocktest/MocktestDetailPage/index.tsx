import MocktestDetailArea from '#features/Mocktest/MocktestDetailArea/MocktestDetailArea'
import MocktestRankListArea from '#features/Rank/ui/MocktestRankListArea/MocktestRankListArea'
import styles from './index.module.scss'

const MocktestDetailPage: React.FC = () => {
  return (
    <div className={styles['mocktest-deatil-cotainer']}>
      <MocktestDetailArea />
      <MocktestRankListArea />
    </div>
  )
}
export default MocktestDetailPage
