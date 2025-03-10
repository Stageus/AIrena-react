import { WriteIcon } from '#shared/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import Pagination from './Pagination'
import SearchFooter from './SearchFooter'

interface ArticleFooterProps {
  firstPageNumber: number
  lastPageNumber: number
  currentPageNumber: number
  prevPageExist: boolean
  nextPageExist: boolean
  setTitle: (title: string) => void
  setCurrent: (current: number) => void
}

const ArticleFooter: React.FC<ArticleFooterProps> = ({
  firstPageNumber,
  lastPageNumber,
  currentPageNumber,
  prevPageExist,
  nextPageExist,
  setTitle,
  setCurrent,
}) => {
  const location = useLocation().pathname.split('/')[1]
  const navigate = useNavigate()
  const goMockWritePage = () => {
    navigate(`/${location}/write`)
  }

  return (
    <div className={styles['article-footer']}>
      <div className={styles['pagination-and-write-footer']}>
        <Pagination
          firstPageNumber={firstPageNumber}
          lastPageNumber={lastPageNumber}
          currentPageNumber={currentPageNumber}
          prevPageExist={prevPageExist}
          nextPageExist={nextPageExist}
          setCurrent={setCurrent}
        />
        <div onClick={goMockWritePage} className={styles['write-button']}>
          <WriteIcon className={styles['write-icon']} />
          <div className={styles['text']}>작성</div>
        </div>
      </div>
      <SearchFooter setTitle={setTitle} />
    </div>
  )
}
export default ArticleFooter
