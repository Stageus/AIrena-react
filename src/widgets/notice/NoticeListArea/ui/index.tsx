import ArticleInfoArea from '#entities/global/ui/ArticleInfoArea'
import ArticleLegend from '#entities/global/ui/ArticleLegend'
import ArticleFooter from '#entities/global/ui/ArticleListFooter'
import ArticleSelectHeader from '#entities/global/ui/ArticleSelectHeader'
import { useEffect, useState } from 'react'
import {
  NoticeListResponse,
  requestNoticeList,
  requestNoticeListSearch,
} from '../api'
import styles from './index.module.scss'

const NoticeListArea: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [noticeList, setNoticeList] = useState<NoticeListResponse | null>(null)
  const [current, setCurrent] = useState(1)
  const [title, setTitle] = useState('')
  const display = 10

  useEffect(() => {
    const fetchData = async () => {
      if (title === '') {
        const data = await requestNoticeList({ current, display })
        setNoticeList(data)
        setLoading(false)
        return
      }
      const data = await requestNoticeListSearch({
        current,
        display,
        title,
      })
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
