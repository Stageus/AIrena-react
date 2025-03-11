import styles from './index.module.scss'

interface ArticleLegendProps {
  likeExist: boolean
  sort?: string | null
  setSort?: (sort: string | null) => void
}

const ArticleLegend: React.FC<ArticleLegendProps> = ({
  likeExist,
  sort,
  setSort,
}) => {
  const handleClick = () => {
    if (setSort) {
      if (sort === null) {
        setSort('like')
      } else {
        setSort(null)
      }
    }
  }
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
          <div
            className={styles['like-count-click-box']}
            onClick={() => handleClick()}
          >
            <div className={styles['like-count']}>좋아요</div>
            <img
              src="https://image-resource.creatie.ai/150880125742532/150880125742534/ef0d5f9b0dd3ddc582782e4f4b44dd00.png"
              className={styles['image']}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default ArticleLegend
