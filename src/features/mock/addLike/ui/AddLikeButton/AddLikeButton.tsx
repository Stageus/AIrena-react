import { ReactComponent as TransparentLikeIcon } from '#assets/icons/transparent_like_icon.svg'
import styles from './AddLikeButton.module.scss'

export const AddLikeButton: React.FC = () => {
  return (
    <div className={styles['like-button']}>
      <TransparentLikeIcon className={styles['transparent-like-icon']} />
      <div className={styles['text']}>좋아요</div>
    </div>
  )
}
