import { LikeIcon } from '#shared/icons'
import styles from './Like.module.scss'

interface LikeProps {
  likeCount: number
}

export const Like: React.FC<LikeProps> = ({ likeCount }) => {
  return (
    <div className={styles['like-output-area']}>
      <div className={styles['like']}>좋아요</div>
      <div className={styles['like-content']}>
        <LikeIcon className={styles['like-icon']} />
        <div className={styles['like-count']}>{likeCount}</div>
      </div>
    </div>
  )
}
