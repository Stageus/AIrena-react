import styles from './index.module.scss'

interface ArticleLegendProps {
  likeExist: boolean
}

const ArticleLegend: React.FC<ArticleLegendProps> = ({ likeExist }) => {
  return (
    <div className={styles['article-legend']}>
      <div className={styles['number-output-box']}>
        <div className={styles['number']}>번호</div>
      </div>
      <div className={styles['title-output-box']}>
        <div className={styles['title']}>제목</div>
      </div>
      <div className={styles['write-nickname-output-box']}>
        <div className={styles['writer-nickname']}>작성자</div>
      </div>
      <div className={styles['write-date-output-box']}>
        <div className={styles['write-date']}>작성일</div>
      </div>
      {likeExist ? (
        <div className={styles['like-count-output-box']}>
          <div className={styles['content-box']}>
            <div className={styles['like-count']}>좋아요</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default ArticleLegend
