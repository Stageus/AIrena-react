import styles from './SubmitAnswer.module.scss'

interface SubmitAnswerProps {
  submitAnswer: string
}

export const SubmitAnswer: React.FC<SubmitAnswerProps> = ({ submitAnswer }) => {
  return (
    <div className={styles['submit-answer-output-box']}>
      <div className={styles['text']}>제출한 답안</div>
      <div className={styles['submit-answer-content']}>
        <div className={styles['submit-answer']}>{submitAnswer}</div>
      </div>
    </div>
  )
}
