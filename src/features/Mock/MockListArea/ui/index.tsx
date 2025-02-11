import ArticleInfoArea from '#shared/components/article/ArticleInfoArea'
import ArticleLegend from '#shared/components/article/ArticleLegend'
import ArticleFooter from '#shared/components/article/ArticleListFooter'
import ArticleSelectAndSortHeader from '#shared/components/article/ArticleSelectAndSortHeader'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MockListResponse, requestMockList } from '../api'
import styles from './index.module.scss'

const MockListArea: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [mockList, setMockList] = useState<MockListResponse | null>(null)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const current = parseInt(queryParams.get('current') || '1', 10)
  const display = parseInt(queryParams.get('display') || '10', 10)

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockList({ current, display })
      setMockList(data)
      setLoading(false)
    }

    fetchData()
  }, [location.search])

  const likeExist = true

  if (loading) {
    return (
      <div className={styles['mock-list-area']}>
        <ArticleSelectAndSortHeader />
        <ArticleLegend likeExist={likeExist} />
      </div>
    )
  }

  return (
    <>
      <div className={styles['mock-list-area']}>
        <ArticleSelectAndSortHeader />
        <ArticleLegend likeExist={likeExist} />
        {mockList?.mocks.map(
          ({ idx, title, writerNickname, createdAt, likeCount }, index) => (
            <ArticleInfoArea
              key={index}
              number={index + (current - 1) * display + 1}
              idx={idx}
              title={title}
              writerNickname={writerNickname}
              writeDate={createdAt}
              likeExist={likeExist}
              likeCount={likeCount}
            />
          ),
        )}
        <ArticleFooter
          firstPageNumber={mockList?.firstPageNumber as number}
          lastPageNumber={mockList?.lastPageNumber as number}
          currentPageNumber={mockList?.currentPageNumber as number}
        />
      </div>
    </>
  )
}
export default MockListArea
