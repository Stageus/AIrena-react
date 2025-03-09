import { Like } from '#entities/mock'
import { AddLikeButton } from '#features/mock/addLike'
import styles from './MockLikeArea.module.scss'

export const MockLikeArea: React.FC = () => {
  return (
    <div className={styles['mock-like-area']}>
      <Like likeCount={0} />
      <AddLikeButton />
    </div>
  )
}
