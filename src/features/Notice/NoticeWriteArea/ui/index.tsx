import WriteFooter from '#shared/components/article/ArticleWriteFooter'
import ImageUploader from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestNoticePost } from '../api'
import styles from './index.module.scss'

const NoticeWriteArea: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const navigate = useNavigate()
  const goNoticePage = () => {
    navigate('/notice/list')
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    if (files.length > 0) {
      Array.from(files).forEach((file) => {
        formData.append('image', file)
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
          />
        </div>
      </div>
      <div className={styles['content-input-area']}>
        <div className={styles['text-2']}>내용</div>
        <TextEditor setContent={setContent} />
      </div>
      <div className={styles['image-submit-area']}>
        <div className={styles['text-3']}>이미지 등록(최대 5개)</div>
        <ImageUploader existingFiles={files} setFiles={setFiles} limit={5} />
      </div>
      <WriteFooter onCancelClick={goNoticePage} onSubmitClick={handleSubmit} />
    </div>
  )
}
export default NoticeWriteArea
