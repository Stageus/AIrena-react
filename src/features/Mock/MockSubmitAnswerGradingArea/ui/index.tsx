import { ReactComponent as NextIcon } from '#assets/icons/next_icon.svg'
import { UUID } from 'crypto'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GradingResultResponse, requestGradingResult } from '../api'
import styles from './index.module.scss'

const MockSubmitAnswerGradingArea: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()
  if (!idx) {
    return null
  }

  const navigate = useNavigate()
  const goNextQuizPage = () => {
    navigate(`/mock/solve/${idx}`)
  }
  const goMockResultPage = () => {
    navigate(`/mock/result/${idx}`)
  }

  const [loading, setLoading] = useState(true)
  const [mockAnswer, setMockAnswer] = useState<GradingResultResponse | null>(
    null,
  )

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestGradingResult(idx)
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
  const currentQuizIndex: number = mockAnswer?.currentQuizIndex ?? 0
  const totalQuizCount: number = mockAnswer?.totalQuizCount ?? 0

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
      {currentQuizIndex < totalQuizCount ? (
        <div onClick={goNextQuizPage} className={styles['next-page-button']}>
          <div className={styles['text-3']}>다음 문제</div>
          <NextIcon className={styles['next-icon']} />
        </div>
      ) : currentQuizIndex == totalQuizCount ? (
        <div onClick={goMockResultPage} className={styles['finish-button']}>
          <div className={styles['text-4']}>완료</div>
        </div>
      ) : null}
    </div>
  )
}

export default MockSubmitAnswerGradingArea
