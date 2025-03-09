import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const ArticleSelectHeader: React.FC = ({}) => {
  const navigate = useNavigate()
  const goMockListPage = () => {
    window.location.replace('/mock/list')
  }
  const goNoticeListPage = () => {
    window.location.replace('/notice/list')
  }

  const location = useLocation()
  const isMockPage = location.pathname.startsWith('/mock')
  const isNoticePage = location.pathname.startsWith('/notice')

  return (
    <div className={styles['article-select-and-sort-header']}>
      <div className={styles['article-select-button']}>
        <div
          onClick={goMockListPage}
          className={`${styles['total-article-button']} ${isMockPage ? styles['in-this-article'] : ''}`}
        >
          <div
            className={`${styles['text']} ${isMockPage ? styles['in-this-article'] : ''}`}
          >
            전체글
          </div>
        </div>
        <div
          onClick={goNoticeListPage}
          className={`${styles['notice-article-button']} ${isNoticePage ? styles['in-this-article'] : ''}`}
        >
          <div
            className={`${styles['text-1']} ${isNoticePage ? styles['in-this-article'] : ''}`}
          >
            공지글
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArticleSelectHeader
