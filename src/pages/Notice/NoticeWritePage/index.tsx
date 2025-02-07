import NoticeWriteArea from '#features/Notice/NoticeWriteArea/ui'
import styles from './index.module.scss'

const NoticeWritePage: React.FC = () => {
  return (
    <div className={styles['notice-write-container']}>
      <NoticeWriteArea />
    </div>
  )
}
export default NoticeWritePage
