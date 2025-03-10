import { Result } from '#entities/mock'
import { GoMockDetailPageButton } from '#features/mock/goMockDetailPage'
import { UUID } from 'crypto'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MockResultResponse, requestMockResult } from '../api'
import styles from './MockResultPage.module.scss'

export const MockResultPage: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [mockResult, setMockResult] = useState<MockResultResponse | null>(null)

  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await requestMockResult({ idx })
      setMockResult(data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading) {
    return null
  }

  if (!mockResult) {
    return null
  }

  const score: number = mockResult.score ?? 0
  const maxScore: number = mockResult.maxScore ?? 0
  const topPercentile: number = mockResult.topPercentile ?? 0

  return (
    <div className={styles['mock-submit-answer-grading-container']}>
      return (
      <div className={styles['mock-result-area']}>
        <div className={styles['text']}>모의고사 결과</div>
        <Result
          score={score}
          maxScore={maxScore}
          topPercentile={topPercentile}
        />
        <GoMockDetailPageButton />
      </div>
      )
    </div>
  )
}
