import ArticleSelectAndSortHeader from '#shared/components/Header/ArticleSelectAndSortHeader/ArticleSelectAndSortHeader'
import styles from '.index.module.scss'
import MockArea from './MockArea'
import MockLegend from './MockLegend'

const MockListArea: React.FC = () => {
  return (
    <div className={styles['mock-list-area']}>
      <ArticleSelectAndSortHeader />
      <MockLegend />
      {Array.from({ length: 10 }, (_, index) => (
        <MockArea key={index} />
      ))}
    </div>
  )
}
export default MockListArea
