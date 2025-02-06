import { ReactComponent as DateIcon } from '#assets/icons/date_icon.svg'
import { ReactComponent as QuizCountIcon } from '#assets/icons/quiz_count_icon.svg'
import { ReactComponent as WriterIcon } from '#assets/icons/writer_icon.svg'
import styles from './index.module.scss'

const MockBasicInfoArea: React.FC = () => {
  return (
    <div className={styles['mock-basic-info-area']}>
      <div className={styles['writer-nickname-output-box']}>
        <WriterIcon className={styles['writer-icon']} />
        <div className={styles['writer-nickname']}>작성자: 김스테이지어스</div>
      </div>
      <div className={styles['write-date-output-box']}>
        <DateIcon className={styles['date-icon']} />
        <div className={styles['write-date']}>작성일: 2024.02.20</div>
      </div>
      <div className={styles['quiz-count-output-box']}>
        <QuizCountIcon className={styles['quiz-count-icon']} />
        <div className={styles['text-quiz-count']}>문제 수: 10문제</div>
      </div>
    </div>
  )
}
export default MockBasicInfoArea
