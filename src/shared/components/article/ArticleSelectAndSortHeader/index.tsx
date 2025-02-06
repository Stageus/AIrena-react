import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const ArticleSelectAndSortHeader: React.FC = () => {
  const navigate = useNavigate()
  const goMockListPage = () => {
    navigate('/mock')
  }
  const goNoticeListPage = () => {
    navigate('/notice')
  }

  const location = useLocation()
  const isMockPage = location.pathname === '/mock'
  const isNoticePage = location.pathname === '/notice'

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
      <div className={styles['sort-select']}>
        <div className={styles['text-2']}>정렬</div>
        <img
          src="https://image-resource.creatie.ai/150880125742532/150880125742534/ef0d5f9b0dd3ddc582782e4f4b44dd00.png"
          className={styles['image']}
        />
      </div>
    </div>
  )
}
export default ArticleSelectAndSortHeader
