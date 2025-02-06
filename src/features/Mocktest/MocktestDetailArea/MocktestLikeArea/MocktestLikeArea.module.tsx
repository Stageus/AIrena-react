import { ReactComponent as LikeIcon } from '#assets/icons/like_icon.svg'
import { ReactComponent as TransparentLikeIcon } from '#assets/icons/transparent_like_icon.svg'
import styles from './MocktestListArea.module.css'

const MocktestLikeArea = ({}) => {
  return (
    <div className={styles['mocktest-like-area']}>
      <div className={styles['like-output-area']}>
        <div className={styles['like']}>좋아요</div>
        <div className={styles['like-content']}>
          <LikeIcon className={styles['like-icon']} />
          <div className={styles['like-count']}>128</div>
        </div>
      </div>
      <div className={styles['like-button']}>
        <TransparentLikeIcon className={styles['transparent-like-icon']} />
        <div className={styles['text']}>좋아요</div>
      </div>
    </div>
  )
}
export default MocktestLikeArea
