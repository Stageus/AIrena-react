import React, { useState } from 'react'
import styles from './index.module.scss'

interface TextAnswerInputAreaProps {
  handleSubmit: (answer: string) => void
}

const TextAnswerInputArea: React.FC<TextAnswerInputAreaProps> = ({
  handleSubmit,
}) => {
  const [text, setText] = useState<string>('')

  const handleClick = () => {
    handleSubmit(text)
  }

  return (
    <div className={styles['text-answer-input-area']}>
      <div className={styles['answer-input']}>
        <div className={styles['placeholder']}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="답을 입력하세요"
            className={styles['placeholder']}
          />
        </div>
      </div>
      <div onClick={handleClick} className={styles['submit-button']}>
        <div className={styles['text']}>답안 제출하기</div>
      </div>
    </div>
  )
}
export default TextAnswerInputArea
