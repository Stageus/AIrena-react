import { ReactComponent as SolveIcon } from '#assets/icons/solve_icon.svg'
import ArticleManagementArea from '#shared/components/ArticleManagementArea/ArticleManagementArea'
import { useNavigate } from 'react-router-dom'
import MocktestBasicInfoArea from './MocktestBasicInfo/MocktestBasicInfoArea'
import styles from './MocktestDetailArea.module.css'
import MocktestLikeArea from './MocktestLikeArea/MocktestLikeArea.module'

const Root = ({}) => {
  const navigate = useNavigate()
  const navigateToSolvePage = () => {
    navigate('/mocktest/1/solve')
  }

  return (
    <div className={styles['mocktest-detail-area']}>
      <div className={styles['title']}>대한민국 퀴즈</div>
      <div className={styles['description']}>대한민국에 관한 퀴즈입니다</div>
      <div className={styles['thumbnail']}></div>
      <MocktestBasicInfoArea />
      <ArticleManagementArea />
      <MocktestLikeArea />
      <div
        onClick={navigateToSolvePage}
        className={styles['mocktest-solve-button']}
      >
        <div className={styles['button-content']}>
          <SolveIcon className={styles['solve-icon']} />
          <div className={styles['text']}>모의고사 풀기</div>
        </div>
      </div>
    </div>
  )
}
export default Root
