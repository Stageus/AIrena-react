import React from 'react'
import styles from './CorrectAnswer.module.scss'

interface CorrectAnswerProps {
  correctAnswer: string
}

export const CorrectAnswer: React.FC<CorrectAnswerProps> = ({
  correctAnswer,
}) => {
  return (
    <div className={styles['correct-answer-output-box']}>
      <div className={styles['text-1']}>정답</div>
      <div className={styles['correct-answer-content']}>
        <div className={styles['correct-answer']}>{correctAnswer}</div>
      </div>
    </div>
  )
}
