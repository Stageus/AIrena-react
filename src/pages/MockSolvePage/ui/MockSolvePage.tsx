import { Spinner } from '#shared/ui'
import { SingleChoiceSelectArea } from '#widgets/mock/SingleChoiceSelectArea'
import { TextAnswerInputArea } from '#widgets/mock/TextAnswerInputArea'
import { UUID } from 'crypto'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MockQuizResponse, requestMockQuiz, requestQuizAnswer } from '../api'
import styles from './index.module.scss'

export const MockSolvePage: React.FC = () => {
  const [submitting, setSubmitting] = useState(false)
  const [mockQuiz, setMockQuiz] = useState<MockQuizResponse | null>(null)

  const { idx } = useParams<{ idx: UUID }>()
  if (!idx) {
    return null
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await requestMockQuiz({ idx })
      if (response.status === 200) {
        setMockQuiz(response.data)
      }
    }

    fetchData()
  }, [idx])

  const handleSubmit = (
    singleChoiceAnswer: number | null,
    textAnswer: string | null,
  ) => {
    const fetchData = async () => {
      setSubmitting(true)
      await requestQuizAnswer(idx, {
        singleChoiceAnswer,
        textAnswer,
      })
      setSubmitting(false)
    }
    fetchData()
  }

  if (!mockQuiz) {
    return null
  }

  const type: 'SINGLE_CHOICE' | 'TEXT' = mockQuiz.type
  const title: string = mockQuiz.title
  const description: string = mockQuiz.description
  const singleChoiceChoices: string[] = mockQuiz.singleChoiceChoices ?? []

  return (
    <div className={styles['mock-solve-container']}>
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
            <TextAnswerInputArea handleSubmit={handleSubmit} />
          ) : type === 'SINGLE_CHOICE' ? (
            <SingleChoiceSelectArea
              handleSubmit={handleSubmit}
              choices={singleChoiceChoices}
            />
          ) : null}
        </div>
      </div>
      <Spinner content="채점 중입니다..." isSubmitting={submitting} />
    </div>
  )
}
