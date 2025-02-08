import styles from './index.module.scss'
import SingleChoiceSelectArea from './SingleChoiceSelectArea'
import TextAnswerInputArea from './TextAnswerInputArea'

const MockSolveArea: React.FC = () => {
  return (
    <div className={styles['mock-solve-area']}>
      <div className={styles['mock-solve-content-area']}>
        <div className={styles['mock-quiz-output-area']}>
          <div className={styles['title']}>조선시대 왕 퀴즈 1</div>
          <div className={styles['description']}>
            한글을 창제한 조선의 제4대 왕은 누구일까요?
          </div>
        </div>
        <TextAnswerInputArea />
        <SingleChoiceSelectArea />
      </div>
    </div>
  )
}

export default MockSolveArea
