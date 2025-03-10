import ArticleWriteFooter from '#entities/global/ui/ArticleWriteFooter'
import { InputQuizCountBox } from '#features/mock/inputQuizCount/ui/InputQuizCountBox/InputQuizCountBox'
import { InputSubjectBox } from '#features/mock/inputSubject'
import { SpinnerIndicator } from '#shared/ui'
import { BasicWriteArea } from '#widgets/global'
import { useState } from 'react'
import { requestMockPost } from '../api'
import { goMockListPageWithConfirm, goMockPage } from '../libs'
import styles from './MockWritePage.module.scss'

export const MockWritePage: React.FC = () => {
  const [subject, setSubject] = useState<string>('')
  const [quizCount, setQuizCount] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [files, setFiles] = useState<File[] | null>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const fileLimit = 1
  const handleSubmit = async () => {
    const formData = addToFormData(subject, quizCount, title, content, files)
    setSubmitting(true)
    const response = await requestMockPost(formData)
    if (response.status === 200) {
      goMockPage(response.data.articleId)
    }
    setSubmitting(false)
  }

  return (
    <div className={styles['mock-write-container']}>
      <div
        className={styles['mock-write-area']}
        style={{ display: submitting ? 'none' : 'flex' }}
      >
        <div className={styles['text']}>모의고사 작성</div>
        <InputSubjectBox setSubject={setSubject} />
        <InputQuizCountBox setQuizCount={setQuizCount} />
        <BasicWriteArea
          setTitle={setTitle}
          setContent={setContent}
          setFiles={setFiles}
          fileLimit={fileLimit}
        />
        <ArticleWriteFooter
          onCancelClick={goMockListPageWithConfirm}
          onSubmitClick={handleSubmit}
        />
      </div>
      <SpinnerIndicator
        content="퀴즈를 생성하고 있습니다..."
        isSubmitting={submitting}
      />
    </div>
  )
}
