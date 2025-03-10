import ArticleCreationBasicInfoArea from '#entities/global/ui/ArticleCreationBasicInfoArea'
import ArticleManagementArea from '#entities/global/ui/ArticleManagementArea'
import { BasicContent } from '#entities/notice'
import { UUID } from 'crypto'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NoticeDetailResponse, requestNoticeDetail } from '../api'
import styles from './NoticeDetailPage.module.scss'

export const NoticeDetailPage: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  const [loading, setLoading] = useState(true)
  const [noticeDetail, setNoticeDetail] = useState<NoticeDetailResponse | null>(
    null,
  )

  useEffect(() => {
    const fetchData = async () => {
      const response = await requestNoticeDetail({ idx })
      if (response.status === 200) {
        setNoticeDetail(response.data)
      }
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading || !noticeDetail) {
    return null
  }

  const title: string = noticeDetail.title
  const content: string = noticeDetail.content
  const writerNickname: string = noticeDetail.writerNickname
  const createdAt: string = noticeDetail.createdAt
  const images: string[] = noticeDetail.images || []

  return (
    <div className={styles['notice-detail-container']}>
      <div className={styles['notice-detail-area']}>
        <div className={styles['notice-detail-content']}>
          <div className={styles['title-output-box']}>
            <div className={styles['text-title']}>{title}</div>
            <ArticleCreationBasicInfoArea
              nickname={writerNickname}
              date={createdAt}
            />
          </div>
          <BasicContent title={title} description={content} images={images} />
        </div>
        <ArticleManagementArea />
      </div>
    </div>
  )
}
