import { UUID } from 'crypto'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MockQuizResponse, requestMockQuiz, requestQuizAnswer } from '../api'
import styles from './index.module.scss'
import Submitting from './LoadingIndicator'
import SingleChoiceSelectArea from './SingleChoiceSelectArea'
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
      const response = await requestQuizAnswer(idx, {
        singleChoiceAnswer,
        textAnswer,
      })
      setSubmitting(false)
      if (response.status === 201) {
        navigate(`/mock/grading/${idx}`, { replace: true })
      }
    }

    fetchData()
  }

  if (loading || !mockQuiz) {
    return null
  }

  const type: 'SINGLE_CHOICE' | 'TEXT' = mockQuiz.type
  const title: string = mockQuiz.title
  const description: string = mockQuiz.description
  const singleChoiceChoices: string[] = mockQuiz.singleChoiceChoices ?? []

  return (
    <>
      <div
        className={styles['mock-solve-area']}
        style={{ display: submitting ? 'none' : 'flex' }}
      >
        <div className={styles['mock-solve-content-area']}>
          <div className={styles['mock-quiz-output-area']}>
            <div className={styles['title']}>{title}</div>
            <div className={styles['description']}>{description}</div>
          </div>
          {type === 'TEXT' ? (
            <TextAnswerInputArea
              handleSubmit={(answer: string) => handleSubmit(null, answer)}
            />
          ) : type === 'SINGLE_CHOICE' ? (
            <SingleChoiceSelectArea
              handleSubmit={(choice: number) => handleSubmit(choice, null)}
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
