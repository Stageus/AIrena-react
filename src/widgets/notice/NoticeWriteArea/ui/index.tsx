import WriteFooter from '#entities/global/ui/ArticleWriteFooter'
import ImageUploader from '#widgets/global/ImageUploader/ui/ImageUploader'
import TextEditor from '#widgets/global/TextEditor/ui/TextEditor'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestNoticePost } from '../api'
import Submitting from '../Submitting'
import styles from './index.module.scss'

const NoticeWriteArea: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState<File[] | null>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const navigate = useNavigate()
  const goNoticePage = () => {
    navigate('/notice/list')
  }
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    if (files) {
      Array.from(files).forEach((file) => {
        formData.append('image', file)
      })
    }
    setSubmitting(true)
    const response = await requestNoticePost(formData)
    navigate(`/notice/${response.articleId}`)
    setSubmitting(false)
  }

  return (
    <>
      <div
        className={styles['notice-write-area']}
        style={{ display: submitting ? 'none' : 'flex' }}
      >
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
          <div className={styles['text-3']}>이미지 등록</div>
          <ImageUploader setFiles={setFiles} />
        </div>
        <WriteFooter
          onCancelClick={goNoticePage}
          onSubmitClick={handleSubmit}
        />
      </div>
      <Submitting submitting={submitting} />
    </>
  )
}
export default NoticeWriteArea
