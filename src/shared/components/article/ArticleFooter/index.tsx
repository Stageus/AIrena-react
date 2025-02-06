import { ReactComponent as WriteIcon } from '#assets/icons/write_icon.svg'
import Pagination from '#shared/components/Pagination'
import SearchFooter from '#shared/components/article/ArticleFooter/SearchFooter'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const ArticleFooter: React.FC = () => {
  const navigate = useNavigate()

  const goMockWritePage = () => {
    navigate('/mock/write')
  }

  return (
    <div className={styles['article-footer']}>
      <div className={styles['pagination-and-write-footer']}>
        <Pagination />
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
