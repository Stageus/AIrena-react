import ArticleInfoArea from '#shared/components/article/ArticleInfoArea'
import ArticleLegend from '#shared/components/article/ArticleLegend'
import ArticleSelectAndSortHeader from '#shared/components/header/ArticleSelectAndSortHeader'
import styles from './index.module.scss'

const NoticeListArea: React.FC = () => {
  const likeExist = false
  return (
    <div className={styles['mock-list-area']}>
      <ArticleSelectAndSortHeader />
      <ArticleLegend likeExist={likeExist} />
      {Array.from({ length: 10 }, (_, index) => (
        <ArticleInfoArea
          articleType="notice"
          number={index}
          title={'제목'}
          writerNickname={'스테이지어스'}
          writeDate={'2024-09-30'}
          likeExist={likeExist}
          likeCount={null}
        />
      ))}
    </div>
  )
}
export default NoticeListArea
