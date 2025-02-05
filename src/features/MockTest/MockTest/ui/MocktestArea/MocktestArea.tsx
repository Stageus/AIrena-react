import { ReactComponent as LikeIcon } from '#assets/icons/like_icon.svg'
import styles from './MocktestArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['mocktest-area']}>
      <div className={styles['number-output-box']}>
        <div className={styles['number']}>10</div>
      </div>
      <div className={styles['title-output-box']}>
        <div className={styles['title']}>제목 10</div>
      </div>
      <div className={styles['write-nickname-output-box']}>
        <div className={styles['writer-nickname']}>스테이지어스</div>
      </div>
      <div className={styles['write-date-output-box']}>
        <div className={styles['write-date']}>2025-01-21</div>
      </div>
      <div className={styles['like-count-output-box']}>
        <div className={styles['content-box']}>
          <LikeIcon className={styles['like-icon']} />
          <div className={styles['like-count']}>10</div>
        </div>
      </div>
    </div>
  )
}
export default Root
