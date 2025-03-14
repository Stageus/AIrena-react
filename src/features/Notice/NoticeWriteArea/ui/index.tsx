import WriteFooter from '#shared/components/article/ArticleWriteFooter'
import ImageUploader from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import { FileWithID } from '#shared/model/file'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestNoticePost } from '../api'
import styles from './index.module.scss'

const NoticeWriteArea: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [fileWithIds, setFileWithIds] = useState<FileWithID[]>([])

  const navigate = useNavigate()
  const goNoticePage = () => {
    navigate('/notice/list')
  }

  const handleSubmit = async () => {
    if (title.length < 1) {
      alert('제목을 입력해주세요.')
      return
    }
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    if (fileWithIds.length > 0) {
      Array.from(fileWithIds).forEach((fileWithId) => {
        formData.append('image', fileWithId.file)
      })
    }
    const response = await requestNoticePost(formData)
    navigate(`/notice/${response.articleId}`)
  }

  return (
    <div className={styles['notice-write-area']}>
      <div className={styles['text']}>공지사항 작성</div>
      <div className={styles['title-input-area']}>
        <div className={styles['text-1']}>제목</div>
        <div className={styles['title-input-box']}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles['title-input']}
            maxLength={50}
          />
        </div>
      </div>
      <div className={styles['content-input-area']}>
        <div className={styles['text-2']}>내용</div>
        <TextEditor setContent={setContent} />
      </div>
      <div className={styles['image-submit-area']}>
        <div className={styles['text-3']}>이미지 등록(최대 5개)</div>
        <ImageUploader
          existingFiles={fileWithIds}
          setFiles={setFileWithIds}
          limit={5}
        />
      </div>
      <WriteFooter onCancelClick={goNoticePage} onSubmitClick={handleSubmit} />
    </div>
  )
}
export default NoticeWriteArea
