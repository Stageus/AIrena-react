import { TransparentLikeIcon } from '#shared/icons'
import styles from './AddLikeButton.module.scss'

export const AddLikeButton: React.FC = () => {
  return (
    <div className={styles['like-button']}>
      <TransparentLikeIcon className={styles['transparent-like-icon']} />
      <div className={styles['text']}>좋아요</div>
    </div>
  )
}
