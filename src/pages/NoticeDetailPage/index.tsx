import ArticleCreationBasicInfoArea from '#entities/global/ui/ArticleCreationBasicInfoArea'
import ArticleManagementArea from '#entities/global/ui/ArticleManagementArea'
import { UUID } from 'crypto'
import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NoticeDetailResponse, requestNoticeDetail } from './api'
import styles from './index.module.scss'
const NoticeDetailPage: React.FC = () => {
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
      const data = await requestNoticeDetail({ idx })
      console.log(data)
      setNoticeDetail(data)
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
  const images: string[] = noticeDetail.images

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
          <div className={styles['content-output-box']}>
            <div
              className={styles['content']}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
              }}
            ></div>
          </div>
          <div className={styles['image-output-box']}>
            {images.map((image, index) => (
              <div
                key={index}
                className={styles['img']}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
        <ArticleManagementArea />
      </div>
    </div>
  )
}

export default NoticeDetailPage
