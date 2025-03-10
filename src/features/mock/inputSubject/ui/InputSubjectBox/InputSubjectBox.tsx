import styles from './InputSubjectBox.module.scss'

interface InputSubjectBoxProps {
  setSubject: (subject: string) => void
}

export const InputSubjectBox: React.FC<InputSubjectBoxProps> = ({
  setSubject,
}) => {
  return (
    <div className={styles['subject-input-area']}>
      <div className={styles['text-1']}>퀴즈 생성 주제</div>
      <div className={styles['subject-input-box']}>
        <input
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          placeholder="ex) 대한민국"
          className={styles['subject-input']}
        />
      </div>
    </div>
  )
}
