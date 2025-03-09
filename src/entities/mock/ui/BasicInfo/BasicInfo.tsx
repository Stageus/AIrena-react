import { ReactComponent as QuizCountIcon } from '#assets/icons/quiz_count_icon.svg'
import ArticleCreationBasicInfoArea from '#entities/global/ui/ArticleCreationBasicInfoArea'
import styles from './BasicInfo.module.scss'

interface BasicInfoProps {
  nickname: string
  createdAt: string
  quizCount: number
}

export const BasicInfo: React.FC<BasicInfoProps> = ({
  nickname,
  createdAt,
  quizCount,
}) => {
  return (
    <div className={styles['mock-basic-info-area']}>
      <ArticleCreationBasicInfoArea nickname={nickname} date={createdAt} />
      <div className={styles['quiz-count-output-box']}>
        <QuizCountIcon className={styles['quiz-count-icon']} />
        <div className={styles['text-quiz-count']}>
          문제 수: {quizCount}문제
        </div>
      </div>
    </div>
  )
}
