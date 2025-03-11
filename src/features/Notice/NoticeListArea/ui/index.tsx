import ArticleInfoArea from '#shared/components/article/ArticleInfoArea'
import ArticleLegend from '#shared/components/article/ArticleLegend'
import ArticleFooter from '#shared/components/article/ArticleListFooter'
import ArticleSelectHeader from '#shared/components/article/ArticleSelectHeader'
import { useEffect, useState } from 'react'
import { NoticeListResponse, requestNoticeList } from '../api'
import styles from './index.module.scss'

const NoticeListArea: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [noticeList, setNoticeList] = useState<NoticeListResponse | null>(null)
  const [current, setCurrent] = useState(1)
  const [title, setTitle] = useState('')
  const display = 10

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestNoticeList({ current, display, title })
      setNoticeList(data)
      setLoading(false)
    }

    fetchData()
  }, [current, title])

  const likeExist = false

  if (loading) {
    return (
      <div className={styles['notice-list-area']}>
        <ArticleSelectHeader />
        <ArticleLegend likeExist={likeExist} />
      </div>
    )
  }

  return (
    <div className={styles['notice-list-area']}>
      <ArticleSelectHeader />
      <ArticleLegend likeExist={likeExist} />
      {noticeList?.notices?.map(
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
        firstPageNumber={noticeList?.firstPageNumber as number}
        lastPageNumber={noticeList?.lastPageNumber as number}
        currentPageNumber={noticeList?.currentPageNumber as number}
        prevPageExist={noticeList?.prevPageExist as boolean}
        nextPageExist={noticeList?.nextPageExist as boolean}
        setTitle={setTitle}
        setCurrent={setCurrent}
      />
    </div>
  )
}
export default NoticeListArea
