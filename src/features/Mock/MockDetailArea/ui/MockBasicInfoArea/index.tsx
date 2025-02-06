import { ReactComponent as QuizCountIcon } from '#assets/icons/quiz_count_icon.svg'
import ArticleCreationBasicInfoArea from '#shared/components/article/ArticleCreationBasicInfoArea'
import styles from './index.module.scss'

const MockBasicInfoArea: React.FC = () => {
  return (
    <div className={styles['mock-basic-info-area']}>
      <ArticleCreationBasicInfoArea
        nickname="김스테이지어스"
        date="2024-09-30"
      />
      <div className={styles['quiz-count-output-box']}>
        <QuizCountIcon className={styles['quiz-count-icon']} />
        <div className={styles['text-quiz-count']}>문제 수: 10문제</div>
      </div>
    </div>
  )
}
export default MockBasicInfoArea
