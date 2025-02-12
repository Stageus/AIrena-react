import { UUID } from 'crypto'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MockQuizResponse, requestMockAnswer, requestMockQuiz } from '../api'
import styles from './index.module.scss'
import ProgressBar from './ProgressBar'
import SingleChoiceSelectArea from './SingleChoiceSelectArea'
import Submitting from './Submitting'
import TextAnswerInputArea from './TextAnswerInputArea'

const MockSolveArea: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()
  if (!idx) {
    return null
  }

  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const [mockQuiz, setMockQuiz] = useState<MockQuizResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockQuiz({ idx })
      setMockQuiz(data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  const navigate = useNavigate()

  const handleSubmit = (
    singleChoiceAnswer: number | null,
    textAnswer: string | null,
  ) => {
    const fetchData = async () => {
      setSubmitting(true)
      await requestMockAnswer(idx, {
        singleChoiceAnswer,
        textAnswer,
      })
      setSubmitting(false)
      navigate(`/mock/grading/${idx}`)
    }

    fetchData()
  }

  const type: 'SINGLE_CHOICE' | 'TEXT' = mockQuiz?.type ?? 'TEXT'
  const title: string = mockQuiz?.title ?? ''
  const description: string = mockQuiz?.description ?? ''
  const singleChoiceChoices: string[] = mockQuiz?.singleChoiceChoices ?? []
  const currentQuizIndex: number = mockQuiz?.currentQuizIndex ?? 0
  const totalQuizCount: number = mockQuiz?.totalQuizCount ?? 0

  if (loading) {
    return null
  }

  return (
    <>
      <div
        className={styles['mock-solve-area']}
        style={{ display: submitting ? 'none' : 'flex' }}
      >
        <ProgressBar current={currentQuizIndex} total={totalQuizCount} />
        <div className={styles['mock-solve-content-area']}>
          <div className={styles['mock-quiz-output-area']}>
            <div className={styles['title']}>{title}</div>
            <div className={styles['description']}>{description}</div>
          </div>
          {type === 'TEXT' ? (
            <TextAnswerInputArea handleSubmit={handleSubmit} />
          ) : type === 'SINGLE_CHOICE' ? (
            <SingleChoiceSelectArea
              handleSubmit={handleSubmit}
              choices={singleChoiceChoices}
            />
          ) : null}
        </div>
      </div>
      <Submitting isSubmitting={submitting} />
    </>
  )
}

export default MockSolveArea
