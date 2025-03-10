import ArticleWriteFooter from '#entities/global/ui/ArticleWriteFooter'
import { goNoticePage } from '#shared/libs'
import { SpinnerIndicator } from '#shared/ui'
import { BasicWriteArea } from '#widgets/global'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestNoticePost } from '../api'
import { addToFormData } from '../libs'
import styles from './NoticeWritePage.module.scss'

export const NoticeWritePage: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState<File[] | null>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const fileLimit = 5

  const handleSubmit = async () => {
    const formData = addToFormData(title, content, files)
    setSubmitting(true)
    const response = await requestNoticePost(formData)
    if (response.status === 200) {
      useNavigate()(`/notice/${response.data.articleId}`)
    }
    setSubmitting(false)
  }

  return (
    <div className={styles['notice-write-container']}>
      <div
        className={styles['notice-write-area']}
        style={{
          display: submitting ? 'none' : 'flex',
        }}
      >
        <div className={styles['text']}>공지사항 작성</div>
        <BasicWriteArea
          setTitle={setTitle}
          setContent={setContent}
          setFiles={setFiles}
          fileLimit={fileLimit}
        />
        <ArticleWriteFooter
          onCancelClick={goNoticePage}
          onSubmitClick={handleSubmit}
        />
      </div>
      <SpinnerIndicator
        content={'공지사항 작성 중...'}
        isSubmitting={submitting}
      />
    </div>
  )
}
