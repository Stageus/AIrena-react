import ArticleInfoArea from '#shared/components/article/ArticleInfoArea'
import ArticleLegend from '#shared/components/article/ArticleLegend'
import ArticleFooter from '#shared/components/article/ArticleListFooter'
import ArticleSelectHeader from '#shared/components/article/ArticleSelectHeader'
import React, { useEffect, useState } from 'react'
import { MockListResponse, requestMockList } from '../api'
import styles from './index.module.scss'

const MockListArea: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [mockList, setMockList] = useState<MockListResponse | null>(null)
  const [current, setCurrent] = useState(1)
  const [title, setTitle] = useState<string | null>(null)
  const [sort, setSort] = useState<string | null>(null)
  const display = 10
  const likeExist = true

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockList({
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
      <ArticleLegend setSort={setSort} sort={sort} likeExist={likeExist} />
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
        authority={true}
        firstPageNumber={mockList.firstPageNumber}
        lastPageNumber={mockList.lastPageNumber}
        currentPageNumber={mockList.currentPageNumber}
        prevPageExist={mockList.prevPageExist}
        nextPageExist={mockList.nextPageExist}
        setTitle={setTitle}
        setCurrent={setCurrent}
      />
    </div>
  )
}
export default MockListArea
