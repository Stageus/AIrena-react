import MockDetailArea from '#features/Mock/MockDetailArea/ui'
import MockRankListArea from '#features/Rank/MockRankListArea/ui'
import styles from './index.module.scss'

const MockDetailPage: React.FC = () => {
  return (
    <div className={styles['mock-detail-container']}>
      <MockDetailArea />
      <MockRankListArea />
    </div>
  )
}
export default MockDetailPage
