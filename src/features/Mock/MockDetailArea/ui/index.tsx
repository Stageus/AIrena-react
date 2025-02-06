import { ReactComponent as SolveIcon } from '#assets/icons/solve_icon.svg'
import ArticleManagementArea from '#shared/components/article/ArticleManagementArea'
import { useNavigate } from 'react-router-dom'
import MockBasicInfoArea from './MockBasicInfoArea'
import MockLikeArea from './MockLikeArea'
import styles from './index.module.scss'

const MockDetailArea: React.FC = () => {
  const navigate = useNavigate()
  const navigateToSolvePage = () => {
    navigate('/mock/1/solve')
  }

  return (
    <div className={styles['mock-detail-area']}>
      <div className={styles['title']}>대한민국 퀴즈</div>
      <div className={styles['description']}>대한민국에 관한 퀴즈입니다</div>
      <div className={styles['thumbnail']}></div>
      <MockBasicInfoArea />
      <ArticleManagementArea />
      <MockLikeArea />
      <div
        onClick={navigateToSolvePage}
        className={styles['mock-solve-button']}
      >
        <SolveIcon className={styles['solve-icon']} />
        <div className={styles['text']}>모의고사 풀기</div>
      </div>
    </div>
  )
}
export default MockDetailArea
