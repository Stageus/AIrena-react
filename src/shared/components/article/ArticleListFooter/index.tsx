import { ReactComponent as WriteIcon } from '#assets/icons/write_icon.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import Pagination from './Pagination'
import SearchFooter from './SearchFooter'

interface ArticleFooterProps {
  firstPageNumber: number
  lastPageNumber: number
  currentPageNumber: number
}

const ArticleFooter: React.FC<ArticleFooterProps> = ({
  firstPageNumber,
  lastPageNumber,
  currentPageNumber,
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
        />
        <div onClick={goMockWritePage} className={styles['write-button']}>
          <WriteIcon className={styles['write-icon']} />
          <div className={styles['text']}>작성</div>
        </div>
      </div>
      <SearchFooter />
    </div>
  )
}
export default ArticleFooter
