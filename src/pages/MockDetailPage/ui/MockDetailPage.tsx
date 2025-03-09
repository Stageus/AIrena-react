import ArticleManagementArea from '#entities/global/ui/ArticleManagementArea'
import { BasicContent, BasicInfo, RankList } from '#entities/mock'
import { GoMockSolvePageButton } from '#features/mock/goMockSolvePage'
import { UUID } from 'crypto'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MockDetailResponse, requestMockDetail } from '../api'
import styles from './MockDetailPage.module.scss'

export const MockDetailPage: React.FC = () => {
  const [mockDetail, setMockDetail] = useState<MockDetailResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await requestMockDetail({ idx })
      setMockDetail(data)
      setLoading(false)
    }

    fetchData()
  }, [idx])

  if (loading || !mockDetail) {
    return null
  }

  const title: string = mockDetail.title
  const description: string = mockDetail.description
  const writerNickname: string = mockDetail.writerNickname
  const createdAt: string = mockDetail.createdAt
  const quizCount: number = mockDetail.quizCount
  const image: string = mockDetail.images[0]

  return (
    <div className={styles['mock-detail-container']}>
      <div className={styles['mock-detail-area']}>
        <div className={styles['mock-content-area']}>
          <BasicContent title={title} description={description} image={image} />
          <BasicInfo
            nickname={writerNickname}
            createdAt={createdAt}
            quizCount={quizCount}
          />
          <ArticleManagementArea />
          <GoMockSolvePageButton idx={idx} />
        </div>
        <RankList />
      </div>
    </div>
  )
}
