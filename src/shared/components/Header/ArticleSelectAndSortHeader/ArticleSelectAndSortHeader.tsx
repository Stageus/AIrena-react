import styles from './ArticleSelectAndSortHeader.module.css'

const Root = ({}) => {
  return (
    <div className={styles['article-select-and-sort-header']}>
      <div className={styles['article-select-button']}>
        <div className={styles['total-article-button']}>
          <div className={styles['text']}>전체글</div>
        </div>
        <div className={styles['notice-article-button']}>
          <div className={styles['text-1']}>공지글</div>
        </div>
      </div>
      <div className={styles['sort-select']}>
        <div className={styles['text-2']}>정렬</div>
        <img
          src="https://image-resource.creatie.ai/150880125742532/150880125742534/ef0d5f9b0dd3ddc582782e4f4b44dd00.png"
          className={styles['image']}
        />
      </div>
    </div>
  )
}
export default Root
