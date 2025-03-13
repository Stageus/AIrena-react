import { ProfileResponse, requestProfile } from '#shared/api/profile'
import ArticleInfoArea from '#shared/components/article/ArticleInfoArea'
import ArticleLegend from '#shared/components/article/ArticleLegend'
import ArticleFooter from '#shared/components/article/ArticleListFooter'
import ArticleSelectHeader from '#shared/components/article/ArticleSelectHeader'
import React, { useEffect, useState } from 'react'
import { NoticeListResponse, requestNoticeList } from '../api'
import styles from './index.module.scss'

const NoticeListArea: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [noticeList, setNoticeList] = useState<NoticeListResponse | null>(null)
  const [profile, setProfile] = useState<ProfileResponse | null>(null)
  const [current, setCurrent] = useState(1)
  const [title, setTitle] = useState('')
  const [newSearch, setNewSearch] = useState(false)
  const display = 10
  const likeExist = false

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestNoticeList({ current, display, title })
      const profileData = await requestProfile()
      setNoticeList(data)
      setProfile(profileData.data)
      setLoading(false)
    }
    fetchData()
  }, [current, newSearch])

  useEffect(() => {
    setCurrent(1)
    setNewSearch((prev) => !prev)
  }, [title])

  if (loading || !noticeList || !profile) {
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
      {profile.role === 'ADMIN' && (
        <ArticleFooter
          firstPageNumber={noticeList.firstPageNumber}
          lastPageNumber={noticeList.lastPageNumber}
          currentPageNumber={noticeList.currentPageNumber}
          prevPageExist={noticeList.prevPageExist}
          nextPageExist={noticeList.nextPageExist}
          setTitle={setTitle}
          setCurrent={setCurrent}
        />
      )}
    </div>
  )
}
export default NoticeListArea
