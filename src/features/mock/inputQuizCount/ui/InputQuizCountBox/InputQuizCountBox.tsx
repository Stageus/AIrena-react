import styles from './InputQuizCountBox.module.scss'

interface InputQuizCountBoxProps {
  setQuizCount: (quizCount: number) => void
}

export const InputQuizCountBox: React.FC<InputQuizCountBoxProps> = ({
  setQuizCount,
}) => {
  return (
    <div className={styles['quiz-count-input-area']}>
      <div className={styles['text-2']}>퀴즈 생성 개수(최대 10개 가능)</div>
      <div className={styles['subject-input-content']}>
        <div className={styles['quiz-count-input-box']}>
          <input
            type="number"
            onChange={(e) => setQuizCount(Number(e.target.value))}
            min={1}
            max={10}
            className={styles['quiz-count-input']}
          />
        </div>
        <div className={styles['text-3']}>개</div>
      </div>
    </div>
  )
}
