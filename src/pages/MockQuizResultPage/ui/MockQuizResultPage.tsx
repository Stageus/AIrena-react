import { ReactComponent as NextIcon } from '#shared/icons/next_icon.svg'
import { UUID } from 'crypto'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { SubmitAnswer } from '#entities/mock'
import { CorrectAnswer } from '#entities/mock/ui/CorrectAnswer/CorrentAnswer'
import { MockQuizResultResponse, requestMockQuizResult } from '../api'
import { goNextQuizPage } from '../libs'
import { mockAnswerWithNavigation } from '../model'
import styles from './index.module.scss'

export const MockQuizResultPage: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()
  if (!idx) {
    return null
  }

  const [loading, setLoading] = useState(true)
  const [mockAnswer, setMockAnswer] = useState<MockQuizResultResponse | null>(
    null,
  )

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await requestMockQuizResult(idx)
      setMockAnswer(data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading || !mockAnswer) {
    return null
  }

  const submitAnswer: string = mockAnswer.submitAnswer
  const correctAnswer: string = mockAnswer.correctAnswer
  const reason: string = mockAnswer.reason
  const score: number = mockAnswer.score
  const maxScore: number = mockAnswer.maxScore
  const nextQuizIdx: UUID | null = mockAnswer.nextQuizIdx ?? null
  const mockIdx: UUID = mockAnswer.mockIdx

  return (
    <div className={styles['mock-submit-answer-grading-container']}>
      <div className={styles['mock-submit-answer-grading-area']}>
        <div className={styles['answer-output-area']}>
          <SubmitAnswer submitAnswer={submitAnswer} />
          <CorrectAnswer correctAnswer={correctAnswer} />
        </div>
        <div className={styles['score-output-box']}>
          <div className={styles['text-']}>점수</div>
          <div className={styles['score-output-content']}>
            <div className={styles['score']}>
              {score}/{maxScore} 점
            </div>
          </div>
        </div>
        <div className={styles['reason-outout-box']}>
          <div className={styles['text-2']}>설명</div>
          <div className={styles['reason-output-content']}>
            <div className={styles['reason']}>{reason}</div>
          </div>
        </div>
        {nextQuizIdx ? (
          <div
            onClick={() => {
              goNextQuizPage(nextQuizIdx)
            }}
            className={styles['next-page-button']}
          >
            <div className={styles['text-3']}>다음 문제</div>
            <NextIcon className={styles['next-icon']} />
          </div>
        ) : (
          <div
            onClick={() => {
              mockAnswerWithNavigation(mockIdx)
            }}
            className={styles['finish-button']}
          >
            <div className={styles['text-4']}>완료</div>
          </div>
        )}
      </div>
    </div>
  )
}
