import MocktestArea from '#features/MockTest/MockTest/ui/MocktestArea/MocktestArea'
import MocktestLegend from '#features/MockTest/MockTest/ui/MocktestLegend/MocktestLegend'
import ArticleSelectAndSortHeader from '#shared/components/Header/ArticleSelectAndSortHeader/ArticleSelectAndSortHeader'
import styles from './MocktestListArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['mocktest-list-area']}>
      <ArticleSelectAndSortHeader />
      <MocktestLegend />
      {Array.from({ length: 10 }, (_, index) => (
        <MocktestArea key={index} />
      ))}
    </div>
  )
}
export default Root
