import { ReactComponent as NextIcon } from '#assets/icons/next_icon.svg'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const MockSubmitAnswerGradingArea: React.FC = () => {
  const navigate = useNavigate()
  const goMockResultPage = () => {
    navigate('/mock/1/result')
  }
  return (
    <div className={styles['mock-submit-answer-grading-area']}>
      <div className={styles['answer-output-area']}>
        <div className={styles['submit-answer-output-box']}>
          <div className={styles['text']}>제출한 답안</div>
          <div className={styles['submit-answer-content']}>
            <div className={styles['submit-answer']}>세종</div>
          </div>
        </div>
        <div className={styles['correct-answer-output-box']}>
          <div className={styles['text-1']}>정답</div>
          <div className={styles['correct-answer-content']}>
            <div className={styles['correct-answer']}>세종대왕</div>
          </div>
        </div>
      </div>
      <div className={styles['score-output-box']}>
        <div className={styles['text-']}>점수</div>
        <div className={styles['score-output-content']}>
          <div className={styles['score']}>8/10 점</div>
        </div>
      </div>
      <div className={styles['reason-outout-box']}>
        <div className={styles['text-2']}>설명</div>
        <div className={styles['reason-output-content']}>
          <div className={styles['reason']}>세종대왕입니다</div>
        </div>
      </div>
      <div className={styles['next-page-button']}>
        <div className={styles['text-3']}>다음 문제</div>
        <NextIcon className={styles['next-icon']} />
      </div>
      <div onClick={goMockResultPage} className={styles['finish-button']}>
        <div className={styles['text-4']}>완료</div>
      </div>
    </div>
  )
}

export default MockSubmitAnswerGradingArea
