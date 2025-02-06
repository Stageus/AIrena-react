import styles from './MocktestSolveArea.module.css'
import SingleChoiceSelectArea from './SingleChoiceSelectArea/SingleChoiceSelectArea'
import TextAnswerInputArea from './TextAnswerInputArea/TextAnswerInputArea'

const MocktestSolveArea: React.FC = () => {
  return (
    <div className={styles['mocktest-solve-area']}>
      <div className={styles['mocktest-quiz-output-area']}>
        <div className={styles['title']}>조선시대 왕 퀴즈 1</div>
        <div className={styles['description']}>
          한글을 창제한 조선의 제4대 왕은 누구일까요?
        </div>
      </div>
      <TextAnswerInputArea />
      <SingleChoiceSelectArea />
    </div>
  )
}

export default MocktestSolveArea
