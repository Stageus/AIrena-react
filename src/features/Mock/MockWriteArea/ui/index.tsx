import WriteFooter from '#shared/components/article/ArticleWriteFooter'
import ImageUploader from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestMockPost } from '../api'
import styles from './index.module.scss'
import Submitting from './Submitting'

const MockWriteArea: React.FC = () => {
  const [subject, setSubject] = useState<string>('')
  const [quizCount, setQuizCount] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [files, setFiles] = useState<File[] | null>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('subject', subject)
    formData.append('quizCount', quizCount.toString())
    formData.append('title', title)
    formData.append('description', content)
    if (files) {
      Array.from(files).forEach((file) => {
        formData.append('image', file)
      })
    }

    setSubmitting(true)
    const response = await requestMockPost(formData)
    navigate(`/mock/${response.data.articleId}`)
    setSubmitting(false)
  }

  const goMockPage = () => {
    const isConfirmed = window.confirm(
      '변경 내용이 초기화됩니다. 페이지를 벗어나시겠습니까?',
    )
    if (isConfirmed) {
      navigate('/mock/list')
    }
  }

  return (
    <>
      <div
        className={styles['mock-write-area']}
        style={{ display: submitting ? 'none' : 'flex' }}
      >
        <div className={styles['text']}>모의고사 작성</div>
        {/* 퀴즈 생성 주제 입력 */}
        <div className={styles['subject-input-area']}>
          <div className={styles['text-1']}>퀴즈 생성 주제</div>
          <div className={styles['subject-input-box']}>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="ex) 대한민국"
              className={styles['subject-input']}
            />
          </div>
        </div>
        {/* 퀴즈 생성 개수 입력 */}
        <div className={styles['quiz-count-input-area']}>
          <div className={styles['text-2']}>퀴즈 생성 개수(최대 10개 가능)</div>
          <div className={styles['subject-input-content']}>
            <div className={styles['quiz-count-input-box']}>
              <input
                type="number"
                value={quizCount}
                onChange={(e) => setQuizCount(Number(e.target.value))}
                min={1}
                max={10}
                className={styles['quiz-count-input']}
              />
            </div>
            <div className={styles['text-3']}>개</div>
          </div>
        </div>
        <div className={styles['title-input-area']}>
          <div className={styles['text-4']}>제목</div>
          <div className={styles['title-input-box']}>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              placeholder="ex) 대한민국 상식 퀴즈"
              className={styles['title-input']}
            />
          </div>
        </div>
        <div className={styles['content-input-area']}>
          <div className={styles['text-5']}>내용</div>
          <TextEditor setContent={setContent} />
        </div>
        <div className={styles['image-submit-area']}>
          <div className={styles['text-6']}>썸네일 등록</div>
          <ImageUploader setFiles={setFiles} />
        </div>
        <WriteFooter onCancelClick={goMockPage} onSubmitClick={handleSubmit} />
      </div>
      <Submitting submitting={submitting} />
    </>
  )
}
export default MockWriteArea
