import { ReactComponent as SolveIcon } from '#assets/icons/solve_icon.svg'
import ArticleManagementArea from '#shared/components/article/ArticleManagementArea'
import { UUID } from 'crypto'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MockDetailResponse, requestMockDetail } from '../api'
import MockBasicInfoArea from './MockBasicInfoArea'
import MockLikeArea from './MockLikeArea'
import styles from './index.module.scss'

const MockDetailArea: React.FC = () => {
  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  const navigate = useNavigate()
  const navigateToSolvePage = () => {
    if (!mockDetail) {
      return
    }
    navigate(`/mock/solve/${mockDetail.firstQuizIdx}`)
  }

  const [loading, setLoading] = useState(true)
  const [mockDetail, setMockDetail] = useState<MockDetailResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockDetail({ idx })
      setMockDetail(data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading) {
    return null
  }

  const title: string = mockDetail?.title ?? ''
  const description: string = mockDetail?.description ?? ''
  const writerNickname: string = mockDetail?.writerNickname ?? ''
  const createdAt: string = mockDetail?.createdAt ?? ''
  const quizCount: number = mockDetail?.quizCount ?? 0
  const image: string = mockDetail?.images[0] ?? ''

  return (
    <div className={styles['mock-detail-area']}>
      <div className={styles['title']}>{title}</div>
      <div
        className={styles['description']}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
      ></div>
      <div
        className={styles['thumbnail']}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <MockBasicInfoArea
        nickname={writerNickname}
        createdAt={createdAt}
        quizCount={quizCount}
      />
      <ArticleManagementArea />
      <MockLikeArea />
      <div
        onClick={navigateToSolvePage}
        className={styles['mock-solve-button']}
      >
        <SolveIcon className={styles['solve-icon']} />
        <div className={styles['text']}>모의고사 풀기</div>
      </div>
    </div>
  )
}
export default MockDetailArea
