import { ReactComponent as NextIcon } from '#assets/icons/next_icon.svg'
import { UUID } from 'crypto'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  MockQuizResultResponse,
  requestMockAnswer,
  requestMockQuizResult,
} from '../api'
import styles from './index.module.scss'

const MockQuizResultArea: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()
  if (!idx) {
    return null
  }

  const [loading, setLoading] = useState(true)
  const [mockAnswer, setMockAnswer] = useState<MockQuizResultResponse | null>(
    null,
  )

  const navigate = useNavigate()
  const goNextQuizPage = () => {
    navigate(`/mock/solve/${mockAnswer?.nextQuizIdx}`, { replace: true })
  }

  const goMockResultPage = () => {
    navigate(`/mock/result/${mockAnswer?.mockIdx}`, { replace: true })
  }

  const handleClick = () => {
    const fetchData = async () => {
      if (!mockAnswer?.mockIdx) {
        return
      }
      const data = await requestMockAnswer(mockAnswer?.mockIdx)
      goMockResultPage()
    }

    fetchData()
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockQuizResult(idx)
      console.log(data)
      setMockAnswer(data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading) {
    return null
  }

  const submitAnswer: string = mockAnswer?.submitAnswer ?? ''
  const correctAnswer: string = mockAnswer?.correctAnswer ?? ''
  const reason: string = mockAnswer?.reason ?? ''
  const score: number = mockAnswer?.score ?? 0
  const maxScore: number = mockAnswer?.maxScore ?? 0
  const nextQuizIdx: UUID | null = mockAnswer?.nextQuizIdx ?? null

  return (
    <div className={styles['mock-submit-answer-grading-area']}>
      <div className={styles['answer-output-area']}>
        <div className={styles['submit-answer-output-box']}>
          <div className={styles['text']}>제출한 답안</div>
          <div className={styles['submit-answer-content']}>
            <div className={styles['submit-answer']}>{submitAnswer}</div>
          </div>
        </div>
        <div className={styles['correct-answer-output-box']}>
          <div className={styles['text-1']}>정답</div>
          <div className={styles['correct-answer-content']}>
            <div className={styles['correct-answer']}>{correctAnswer}</div>
          </div>
        </div>
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
        <div onClick={goNextQuizPage} className={styles['next-page-button']}>
          <div className={styles['text-3']}>다음 문제</div>
          <NextIcon className={styles['next-icon']} />
        </div>
      ) : (
        <div onClick={handleClick} className={styles['finish-button']}>
          <div className={styles['text-4']}>완료</div>
        </div>
      )}
    </div>
  )
}

export default MockQuizResultArea
