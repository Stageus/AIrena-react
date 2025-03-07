import { UUID } from 'crypto'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MockResultResponse, requestMockResult } from './api'
import styles from './index.module.scss'

const MockResultArea: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [mockResult, setMockResult] = useState<MockResultResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockResult({ idx })
      setMockResult(data)
      console.log(data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading) {
    return null
  }

  const goMockDetail = () => {
    navigate(`/mock/${idx}`)
  }

  const score: number = mockResult?.score ?? 0
  const maxScore: number = mockResult?.maxScore ?? 0
  const topPercentile: number = mockResult?.topPercentile ?? 0

  return (
    <div className={styles['mock-result-area']}>
      <div className={styles['text']}>모의고사 결과</div>
      <div className={styles['mock-result-output-box']}>
        <div className={styles['total-score-output-content']}>
          <div className={styles['total-score']}>
            <div className={styles['total-score-1']}>{score}</div>
            <div className={styles['divisor']}>/</div>
            <div className={styles['perfect-score']}>{maxScore}</div>
          </div>
          <div className={styles['text-1']}>총점</div>
        </div>
        <div className={styles['top-rate-output-content']}>
          <div className={styles['top-rate']}>상위 {topPercentile}%</div>
          <div className={styles['text-2']}>백분위</div>
        </div>
        <div onClick={goMockDetail} className={styles['ok-button']}>
          <div className={styles['text-3']}>확인</div>
        </div>
      </div>
    </div>
  )
}

export default MockResultArea
