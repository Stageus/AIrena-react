import { ReactComponent as LikeIcon } from '#assets/icons/like_icon.svg'
import { UUID } from 'crypto'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

interface BaseArticleInfoProps {
  number: number
  idx: UUID
  title: string
  writerNickname: string
  writeDate: string
}

interface LikeExistsProps extends BaseArticleInfoProps {
  likeExist: true
  likeCount: number
}

interface LikeNotExistsProps extends BaseArticleInfoProps {
  likeExist: false
  likeCount: null
}

type ArticleInfoAreaProps = LikeExistsProps | LikeNotExistsProps

const ArticleInfoArea: React.FC<ArticleInfoAreaProps> = ({
  number,
  idx,
  title,
  writerNickname,
  writeDate,
  likeExist,
  likeCount,
}) => {
  const location = useLocation().pathname.split('/')[1]
  const navigate = useNavigate()
  const goMockDetail = () => {
    navigate(`/${location}/${idx}`)
  }

  return (
    <div className={styles['article-info-area']}>
      <div className={styles['number-output-box']}>
        <div className={styles['number']}>{number}</div>
      </div>
      <div onClick={goMockDetail} className={styles['title-output-box']}>
        <div className={styles['title']}>{title}</div>
      </div>
      <div className={styles['write-nickname-output-box']}>
        <div className={styles['writer-nickname']}>{writerNickname}</div>
      </div>
      <div className={styles['write-date-output-box']}>
        <div className={styles['write-date']}>{writeDate}</div>
      </div>
      {likeExist ? (
        <div className={styles['like-count-output-box']}>
          <div className={styles['content-box']}>
            <LikeIcon className={styles['like-icon']} />
            <div className={styles['like-count']}>{likeCount}</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default ArticleInfoArea
