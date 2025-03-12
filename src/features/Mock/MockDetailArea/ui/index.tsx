import { ReactComponent as SolveIcon } from '#assets/icons/solve_icon.svg'
import ImageUploader from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import { ArticleEditButtons } from '#shared/components/article/ArticleEditButtons'
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
  requestMockEdit,
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

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('title', titleToEdit)
    formData.append('description', descriptionToEdit)
    if (existingUrls.length > 0) {
      formData.append('existingUrls', existingUrls.join(','))
    }
    if (filesToEdit.length > 0) {
      Array.from(filesToEdit).forEach((file) => {
        formData.append('image', file)
      })
    }
    await requestMockEdit(idx, formData)
    window.location.reload()
  }

  const [loading, setLoading] = useState(true)
  const [mockDetail, setMockDetail] = useState<MockDetailResponse | null>(null)
  const [titleToEdit, setTitleToEdit] = useState('')
  const [descriptionToEdit, setDescriptionToEdit] = useState('')
  const [existingUrls, setExistingUrls] = useState<string[]>([])
  const [filesToEdit, setFilesToEdit] = useState<File[]>([])
  const [editMode, setEditMode] = useState(false)
  const [mockIndividual, setMockIndividual] =
    useState<MockIndividualResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestMockDetail({ idx })
      const individualData = await requestMocIndividual({ idx })
      setMockDetail(data)
      setTitleToEdit(data.title)
      setDescriptionToEdit(data.description)
      if (data.images) {
        setExistingUrls(data.images)
      }
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

  const owner = mockIndividual.owner
  const admin = mockIndividual.admin
  const solved = mockIndividual.solved
  const pushLike: boolean = mockIndividual.pushLike

  return (
    <div className={styles['mock-detail-area']}>
      <div className={styles['mock-content-area']}>
        {editMode ? (
          <>
            <input
              type="text"
              className={styles['title']}
              value={titleToEdit}
              onChange={(e) => setTitleToEdit(e.target.value)}
            />
            <TextEditor
              content={descriptionToEdit}
              setContent={setDescriptionToEdit}
            />
            <div className={styles['text-3']}>이미지 등록(최대 1개)</div>
            <ImageUploader
              existingFiles={filesToEdit}
              setFiles={setFilesToEdit}
              existingUrls={existingUrls}
              setExistingUrls={setExistingUrls}
              limit={1}
            />
            <ArticleEditButtons
              setEditMode={setEditMode}
              onCompleteClick={handleSubmit}
            />
          </>
        ) : (
          <>
            <div className={styles['title']}>{title}</div>
            <div
              className={styles['description']}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
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
            {(owner || admin) && (
              <ArticleManagementArea setEditMode={setEditMode} />
            )}
            <MockLikeArea likeCount={likeCount} pushLike={pushLike} idx={idx} />
            <div
              onClick={navigateToSolvePage}
              className={styles['mock-solve-button']}
            >
              <SolveIcon className={styles['solve-icon']} />
              <div className={styles['text']}>
                {solved
                  ? '다시 풀기(랭킹에 반영되지 않습니다)'
                  : '모의고사 풀기'}
              </div>
            </div>
          </>
        )}
      </div>
      <MockRankListArea ranks={mockDetail.ranks} />
    </div>
  )
}
export default MockDetailArea
