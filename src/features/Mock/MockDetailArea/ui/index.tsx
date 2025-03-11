import { ReactComponent as SolveIcon } from '#assets/icons/solve_icon.svg'
import ArticleManagementArea from '#shared/components/article/ArticleManagementArea'
import { UUID } from 'crypto'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MockRankListArea from '../MockRankListArea'
import {
  MockDetailResponse,
  MockIndividualResponse,
  requestMocIndividual,
  requestMockDetail,
} from '../api'
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
  const [mockIndividual, setMockIndividual] =
    useState<MockIndividualResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockDetail({ idx })
      const individualData = await requestMocIndividual({ idx })
      setMockDetail(data)
      setMockIndividual(individualData)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading || !mockDetail || !mockIndividual) {
    return null
  }

  const title: string = mockDetail.title
  const description: string = mockDetail.description
  const writerNickname: string = mockDetail.writerNickname
  const createdAt: string = mockDetail.createdAt
  const quizCount: number = mockDetail.quizCount
  const image: string = mockDetail.images[0]
  const likeCount: number = mockDetail.likeCount
  const pushLike: boolean = mockIndividual.pushLike

  return (
    <div className={styles['mock-detail-area']}>
      <div className={styles['mock-content-area']}>
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
        <MockLikeArea likeCount={likeCount} pushLike={pushLike} idx={idx} />
        <div
          onClick={navigateToSolvePage}
          className={styles['mock-solve-button']}
        >
          <SolveIcon className={styles['solve-icon']} />
          <div className={styles['text']}>모의고사 풀기</div>
        </div>
      </div>
      <MockRankListArea />
    </div>
  )
}
export default MockDetailArea
