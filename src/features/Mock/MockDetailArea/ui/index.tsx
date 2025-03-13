import { ReactComponent as SolveIcon } from '#assets/icons/solve_icon.svg'
import { requestLike, requestUnlike } from '#shared/api/like'
import ImageUploader from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import { ArticleEditButtons } from '#shared/components/article/ArticleEditButtons'
import ArticleManagementArea from '#shared/components/article/ArticleManagementArea'
import { FileWithID, UrlWithID } from '#shared/model/file'
import { UUID } from 'crypto'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MockRankListArea from '../MockRankListArea'
import {
  requestMocIndividual,
  requestMockDetail,
  requestMockEdit,
} from '../api'
import MockBasicInfoArea from './MockBasicInfoArea'
import MockLikeArea from './MockLikeArea'
import styles from './index.module.scss'

const MockDetailArea: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [writerNickname, setWriterNickname] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [quizCount, setQuizCount] = useState(0)
  const [image, setImage] = useState('')
  const [likeCount, setLikeCount] = useState(0)
  const [ranks, setRanks] = useState<
    {
      rank: number
      nickname: string
      score: number
    }[]
  >([])
  const [firstQuizIdx, setFirstQuizIdx] = useState<UUID | null>(null)

  const [pushLike, setPushLike] = useState(false)
  const [owner, setOwner] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [solved, setSolved] = useState(false)

  const [existingUrls, setExistingUrls] = useState<UrlWithID[]>([])
  const [titleToEdit, setTitleToEdit] = useState('')
  const [descriptionToEdit, setDescriptionToEdit] = useState('')
  const [filesToEdit, setFilesToEdit] = useState<FileWithID[]>([])
  const [editMode, setEditMode] = useState(false)

  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  const navigate = useNavigate()
  const navigateToSolvePage = () => {
    navigate(`/mock/solve/${firstQuizIdx}`)
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('title', titleToEdit)
    formData.append('description', descriptionToEdit)
    if (existingUrls.length > 0) {
      formData.append(
        'existingUrls',
        existingUrls.map((urlWithId) => urlWithId.url).join(','),
      )
    }
    if (filesToEdit.length > 0) {
      Array.from(filesToEdit).forEach((fileWithId) => {
        formData.append('image', fileWithId.file)
      })
    }
    await requestMockEdit(idx, formData)
    await setMockDetail()
    await setMockIndividual()
    setEditMode(false)
  }

  const setMockDetail = async () => {
    const data = await requestMockDetail({ idx })
    setTitle(data.title)
    setDescription(data.description)
    setWriterNickname(data.writerNickname)
    setCreatedAt(data.createdAt)
    setQuizCount(data.quizCount)
    setImage(data.images[0])
    setLikeCount(data.likeCount)
    setRanks(data.ranks)
    setFirstQuizIdx(data.firstQuizIdx)
    setExistingUrls(
      data.images.map((image) => ({
        url: image,
        id: window.crypto.randomUUID(),
      })),
    )
    return data
  }

  const setMockIndividual = async () => {
    const data = await requestMocIndividual({ idx })
    setPushLike(data.pushLike)
    setOwner(data.owner)
    setAdmin(data.admin)
    setSolved(data.solved)
  }

  useEffect(() => {
    const fetchData = async () => {
      await setMockDetail()
      await setMockIndividual()
      setLoading(false)
    }

    fetchData()
  }, [idx])

  const onEditButtonClick = () => {
    setTitleToEdit(title)
    setDescriptionToEdit(description)
    setFilesToEdit(filesToEdit)
    setExistingUrls(existingUrls)
    setEditMode(true)
  }

  const onLikeClick = async () => {
    if (pushLike) {
      await requestUnlike({ idx })
    } else {
      await requestLike({ idx })
    }
    await setMockDetail()
    await setMockIndividual()
  }

  if (loading) {
    return null
  }

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
              <ArticleManagementArea onEditButtonClick={onEditButtonClick} />
            )}
            <MockLikeArea
              likeCount={likeCount}
              pushLike={pushLike}
              onClick={onLikeClick}
            />
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
      <MockRankListArea ranks={ranks} />
    </div>
  )
}
export default MockDetailArea
