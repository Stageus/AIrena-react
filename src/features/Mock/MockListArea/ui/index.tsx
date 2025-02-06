import ArticleInfoArea from '#shared/components/article/ArticleInfoArea'
import ArticleLegend from '#shared/components/article/ArticleLegend'
import ArticleSelectAndSortHeader from '#shared/components/article/ArticleSelectAndSortHeader'
import styles from './index.module.scss'

const MockListArea: React.FC = () => {
  const likeExist = true
  return (
    <div className={styles['mock-list-area']}>
      <ArticleSelectAndSortHeader />
      <ArticleLegend likeExist={likeExist} />
      {Array.from({ length: 9 }, (_, index) => (
        <ArticleInfoArea
          key={index}
          number={index}
          title={'제목'}
          writerNickname={'스테이지어스'}
          writeDate={'2024-09-30'}
          likeExist={likeExist}
          likeCount={130}
        />
      ))}
      <ArticleInfoArea
        number={999}
        title={'삭제된 페이지입니다'}
        writerNickname={'스테이지어스'}
        writeDate={'2024-09-30'}
        likeExist={likeExist}
        likeCount={130}
      />
    </div>
  )
}
export default MockListArea
