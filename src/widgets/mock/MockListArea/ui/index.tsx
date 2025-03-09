import ArticleInfoArea from '#entities/global/ui/ArticleInfoArea'
import ArticleLegend from '#entities/global/ui/ArticleLegend'
import ArticleFooter from '#entities/global/ui/ArticleListFooter'
import ArticleSelectHeader from '#entities/global/ui/ArticleSelectHeader'
import { useEffect, useState } from 'react'
import {
  MockListResponse,
  requestMockList,
  requestMockListSearch,
} from '../api'
import styles from './index.module.scss'

const MockListArea: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [mockList, setMockList] = useState<MockListResponse | null>(null)
  const [current, setCurrent] = useState(1)
  const [title, setTitle] = useState('')
  const [sort, setSort] = useState('')
  const display = 10

  useEffect(() => {
    const fetchData = async () => {
      if (title === '' && sort === '') {
        const data = await requestMockList({ current, display, sort, title })
        setMockList(data)
        setLoading(false)
        return
      }
      const data = await requestMockListSearch({
        current,
        display,
        sort,
        title,
      })
      setMockList(data)
      setLoading(false)
    }

    fetchData()
  }, [current, sort, title])

  const likeExist = true

  if (loading || !mockList) {
    return (
      <div className={styles['mock-list-area']}>
        <ArticleSelectHeader />
      </div>
    )
  }

  return (
    <div className={styles['mock-list-area']}>
      <ArticleSelectHeader />
      <ArticleLegend setSort={setSort} likeExist={likeExist} />
      {mockList.mocks.map(
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
        firstPageNumber={mockList.firstPageNumber as number}
        lastPageNumber={mockList.lastPageNumber as number}
        currentPageNumber={mockList.currentPageNumber as number}
        prevPageExist={mockList.prevPageExist as boolean}
        nextPageExist={mockList.nextPageExist as boolean}
        setTitle={setTitle}
        setCurrent={setCurrent}
      />
    </div>
  )
}
export default MockListArea
