import styles from './TextAnswerInputArea.module.css'

const TextAnswerInputArea: React.FC = () => {
  return (
    <div className={styles['text-answer-input-area']}>
      <div className={styles['answer-input']}>
        <div className={styles['placeholder']}>답을 입력하세요</div>
      </div>
      <div className={styles['sumbit-button']}>
        <div className={styles['text']}>답안 제출하기</div>
      </div>
    </div>
  )
}
export default TextAnswerInputArea
