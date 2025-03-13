import { ReactComponent as LikeIcon } from '#assets/icons/like_icon.svg'
import { ReactComponent as TransparentLikeIcon } from '#assets/icons/transparent_like_icon.svg'
import styles from './index.module.scss'

interface MockLikeAreaProps {
  likeCount: number
  pushLike: boolean
  onClick: () => void
}

const MockLikeArea: React.FC<MockLikeAreaProps> = ({
  likeCount,
  pushLike,
  onClick,
}) => {
  return (
    <div className={styles['mock-like-area']}>
      <div className={styles['like-output-area']}>
        <div className={styles['like']}>좋아요</div>
        <div className={styles['like-content']}>
          <LikeIcon className={styles['like-icon']} />
          <div className={styles['like-count']}>{likeCount}</div>
        </div>
      </div>
      <div onClick={onClick} className={styles['like-button']}>
        {pushLike ? (
          <LikeIcon className={styles['like-icon']} />
        ) : (
          <TransparentLikeIcon className={styles['transparent-like-icon']} />
        )}
        <div className={styles['text']}>좋아요</div>
      </div>
    </div>
  )
}
export default MockLikeArea
