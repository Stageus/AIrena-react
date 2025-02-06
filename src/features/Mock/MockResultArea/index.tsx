import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const MockResultArea: React.FC = () => {
  const navigate = useNavigate()

  const goMockDetail = () => {
    navigate('/mock/1')
  }

  return (
    <div className={styles['mock-result-area']}>
      <div className={styles['text']}>모의고사 결과</div>
      <div className={styles['mock-result-output-box']}>
        <div className={styles['total-score-output-content']}>
          <div className={styles['total-score']}>
            <div className={styles['total-score-1']}>870</div>
            <div className={styles['divisor']}>/</div>
            <div className={styles['perfect-score']}>1000</div>
          </div>
          <div className={styles['text-1']}>총점</div>
        </div>
        <div className={styles['top-rate-output-content']}>
          <div className={styles['top-rate']}>상위 23%</div>
          <div className={styles['text-2']}>백분위</div>
        </div>
        <div onClick={goMockDetail} className={styles['ok-button']}>
          <div className={styles['text-3']}>확인</div>
        </div>
      </div>
    </div>
  )
}

export default MockResultArea
