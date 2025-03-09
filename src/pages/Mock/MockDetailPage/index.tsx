import MockDetailArea from 'src/widgets/mock/MockDetailArea/ui'
import styles from './index.module.scss'

const MockDetailPage: React.FC = () => {
  return (
    <div className={styles['mock-detail-container']}>
      <MockDetailArea />
    </div>
  )
}
export default MockDetailPage
