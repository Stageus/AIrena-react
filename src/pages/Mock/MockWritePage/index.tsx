import MockWriteArea from 'src/widgets/mock/MockWriteArea/ui'
import styles from './index.module.scss'

const MockWritePage: React.FC = () => {
  return (
    <div className={styles['mock-write-container']}>
      <MockWriteArea />
    </div>
  )
}
export default MockWritePage
