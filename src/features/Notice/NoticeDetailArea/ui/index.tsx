import { requestProfile } from '#shared/api/profile'
import ArticleCreationBasicInfoArea from '#shared/components/article/ArticleCreationBasicInfoArea'
import { ArticleEditButtons } from '#shared/components/article/ArticleEditButtons'
import ArticleManagementArea from '#shared/components/article/ArticleManagementArea'
import ImageUploader from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import { FileWithID, UrlWithID } from '#shared/model/file'
import { UUID } from 'crypto'
import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { requestNoticeDetail, requestNoticeEdit } from '../api'
import styles from './index.module.scss'

const NoticeDetailArea: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()
  if (!idx) {
    return null
  }

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [writerNickname, setWriterNickname] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [images, setImages] = useState<string[]>([])

  const [admin, setAdmin] = useState(false)

  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [titleToEdit, setTitleToEdit] = useState('')
  const [contentToEdit, setContentToEdit] = useState('')
  const [existingUrlWithIds, setExistingUrlWithIds] = useState<UrlWithID[]>([])
  const [fileWithIdsToEdit, setFileWithIdsToEdit] = useState<FileWithID[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestNoticeDetail({ idx })
      const profileData = await requestProfile()
      setTitle(data.title)
      setContent(data.content)
      setWriterNickname(data.writerNickname)
      setCreatedAt(data.createdAt)
      setImages(data.images)
      setAdmin(profileData.data.role === 'ADMIN')
      setLoading(false)
    }

    fetchData()
  }, [idx])

  const onEditButtonClick = () => {
    setTitleToEdit(title)
    setContentToEdit(content)
    if (images) {
      setExistingUrlWithIds(
        images.map((image) => ({
          url: image,
          id: window.crypto.randomUUID(),
        })),
      )
    }
    setEditMode(true)
  }

  const setProfile = async () => {
    const profileData = await requestProfile()
    setAdmin(profileData.data.role === 'ADMIN')
  }

  const setNoticeDetail = async () => {
    const data = await requestNoticeDetail({ idx })
    setTitle(data.title)
    setContent(data.content)
    setImages(data.images)
  }

  const handleSubmit = async () => {
    if (titleToEdit.length < 1) {
      alert('제목을 입력해주세요.')
      return
    }
    const formData = new FormData()
    formData.append('title', titleToEdit)
    formData.append('content', contentToEdit)
    formData.append(
      'existingUrls',
      existingUrlWithIds
        .map((existingUrlWithId) => existingUrlWithId.url)
        .join(','),
    )
    Array.from(fileWithIdsToEdit).forEach((file) => {
      formData.append('image', file.file)
    })
    await requestNoticeEdit(idx, formData)
    await setNoticeDetail()
    await setProfile()
    setEditMode(false)
  }

  if (loading) {
    return null
  }

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
            <div className={styles['text-3']}>이미지 등록(최대 5개)</div>
            <ImageUploader
              existingFiles={fileWithIdsToEdit}
              setFiles={setFileWithIdsToEdit}
              existingUrls={existingUrlWithIds}
              setExistingUrls={setExistingUrlWithIds}
              limit={5}
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
          {admin && (
            <ArticleManagementArea onEditButtonClick={onEditButtonClick} />
          )}
        </div>
      )}
    </div>
  )
}
export default NoticeDetailArea
