import { ProfileResponse, requestProfile } from '#shared/api/profile'
import ArticleCreationBasicInfoArea from '#shared/components/article/ArticleCreationBasicInfoArea'
import { ArticleEditButtons } from '#shared/components/article/ArticleEditButtons'
import ArticleManagementArea from '#shared/components/article/ArticleManagementArea'
import ImageUploader from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import { UUID } from 'crypto'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  NoticeDetailResponse,
  requestNoticeDetail,
  requestNoticeEdit,
} from '../api'
import styles from './index.module.scss'

const NoticeDetailArea: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [titleToEdit, setTitleToEdit] = useState('')
  const [contentToEdit, setContentToEdit] = useState('')
  const [existingUrls, setExistingUrls] = useState<string[]>([])
  const [filesToEdit, setFilesToEdit] = useState<File[] | null>(null)
  const [noticeDetail, setNoticeDetail] = useState<NoticeDetailResponse | null>(
    null,
  )
  const [profile, setProfile] = useState<ProfileResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestNoticeDetail({ idx })
      const profileData = await requestProfile()
      setNoticeDetail(data)
      setTitleToEdit(data.title)
      setContentToEdit(data.content)
      if (data.images) {
        setExistingUrls(data.images)
      }
      setProfile(profileData.data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('title', titleToEdit)
    formData.append('content', contentToEdit)
    if (existingUrls.length > 0) {
      formData.append('existingUrls', existingUrls.join(','))
    }
    if (filesToEdit) {
      Array.from(filesToEdit).forEach((file) => {
        formData.append('image', file)
      })
    }
    await requestNoticeEdit(idx, formData)
    window.location.reload()
  }

  if (loading || !noticeDetail || !profile) {
    return null
  }

  const title: string = noticeDetail.title
  const content: string = noticeDetail.content
  const writerNickname: string = noticeDetail.writerNickname
  const createdAt: string = noticeDetail.createdAt
  const images: string[] = noticeDetail.images ?? []

  return (
    <div className={styles['notice-detail-area']}>
      {editMode ? (
        <div className={styles['notice-detail-content']}>
          <div className={styles['title-output-box']}>
            <input
              type="text"
              className={styles['text-title']}
              value={titleToEdit}
              onChange={(e) => setTitleToEdit(e.target.value)}
            />
            <ArticleCreationBasicInfoArea
              nickname={writerNickname}
              date={createdAt}
            />
          </div>
          <TextEditor content={contentToEdit} setContent={setContentToEdit} />
          <div className={styles['image-submit-area']}>
            <div className={styles['text-3']}>이미지 등록</div>
            <ImageUploader
              existingUrls={existingUrls}
              setFiles={setFilesToEdit}
            />
          </div>
          <ArticleEditButtons
            setEditMode={setEditMode}
            onCompleteClick={handleSubmit}
          />
        </div>
      ) : (
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
          {profile.role === 'ADMIN' && (
            <ArticleManagementArea setEditMode={setEditMode} />
          )}
        </div>
      )}
    </div>
  )
}
export default NoticeDetailArea
