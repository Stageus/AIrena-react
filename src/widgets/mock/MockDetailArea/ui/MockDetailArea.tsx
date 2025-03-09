import ArticleManagementArea from '#entities/global/ui/ArticleManagementArea'
import { BasicContent, BasicInfo, Like, RankList } from '#entities/mock'
import { AddLikeButton } from '#features/mock/addLike'
import { GoMockSolvePageButton } from '#features/mock/goMockSolvePage'
import { UUID } from 'crypto'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MockDetailResponse, requestMockDetail } from '../api'
import styles from './index.module.scss'

const MockDetailArea: React.FC = () => {
  const [mockDetail, setMockDetail] = useState<MockDetailResponse | null>(null)

  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockDetail({ idx })
      setMockDetail(data)
    }

    fetchData()
  }, [idx])

  const title: string = mockDetail?.title ?? ''
  const description: string = mockDetail?.description ?? ''
  const writerNickname: string = mockDetail?.writerNickname ?? ''
  const createdAt: string = mockDetail?.createdAt ?? ''
  const quizCount: number = mockDetail?.quizCount ?? 0
  const image: string = mockDetail?.images[0] ?? ''

  return (
    <div className={styles['mock-detail-area']}>
      <div className={styles['mock-content-area']}>
        <BasicContent title={title} description={description} image={image} />
        <BasicInfo
          nickname={writerNickname}
          createdAt={createdAt}
          quizCount={quizCount}
        />
        <ArticleManagementArea />
        <div className={styles['mock-like-area']}>
          <Like likeCount={0} />
          <AddLikeButton />
        </div>
        <GoMockSolvePageButton idx={idx} />
      </div>
      <RankList />
    </div>
  )
}
export default MockDetailArea
