import ArticleInfoArea from '#entities/global/ui/ArticleInfoArea'
import ArticleLegend from '#entities/global/ui/ArticleLegend'
import ArticleFooter from '#entities/global/ui/ArticleListFooter'
import ArticleSelectHeader from '#entities/global/ui/ArticleSelectHeader'
import React, { useEffect, useState } from 'react'
import { NoticeListResponse, requestNoticeList } from '../api'
import styles from './NoticeListPage.module.scss'

export const NoticeListPage: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [noticeList, setNoticeList] = useState<NoticeListResponse | null>(null)
  const [current, setCurrent] = useState(1)
  const [title, setTitle] = useState('')
  const display = 10
  const likeExist = false

  useEffect(() => {
    const fetchData = async () => {
      const response = await requestNoticeList({
        current,
        display,
        title,
      })
      if (response.status === 200) {
        setNoticeList(response.data)
      }
      setLoading(false)
    }

    fetchData()
  }, [current, title])

  if (loading || !noticeList) {
    return (
      <div className={styles['notice-list-area']}>
        <ArticleSelectHeader />
        <ArticleLegend likeExist={likeExist} />
      </div>
    )
  }

  return (
    <div className={styles['notice-list-container']}>
      <div className={styles['notice-list-area']}>
        <ArticleSelectHeader />
        <ArticleLegend likeExist={likeExist} />
        {noticeList.notices.map(
          ({ idx, title, writerNickname, createdAt }, index) => (
            <ArticleInfoArea
              key={index}
              number={index + (current - 1) * display + 1}
              idx={idx}
              title={title}
              writerNickname={writerNickname}
              writeDate={createdAt}
              likeExist={likeExist}
              likeCount={null}
            />
          ),
        )}
        <ArticleFooter
          firstPageNumber={noticeList.firstPageNumber}
          lastPageNumber={noticeList.lastPageNumber}
          currentPageNumber={noticeList.currentPageNumber}
          prevPageExist={noticeList.prevPageExist}
          nextPageExist={noticeList.nextPageExist}
          setTitle={setTitle}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  )
}
