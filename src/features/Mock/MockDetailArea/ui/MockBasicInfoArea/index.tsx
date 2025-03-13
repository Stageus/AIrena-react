import { ReactComponent as QuizCountIcon } from '#assets/icons/quiz_count_icon.svg'
import ArticleCreationBasicInfoArea from '#shared/components/article/ArticleCreationBasicInfoArea'
import React from 'react'
import styles from './index.module.scss'

interface MockBasicInfoAreaProps {
  nickname: string
  createdAt: string
  quizCount: number
}

const MockBasicInfoArea: React.FC<MockBasicInfoAreaProps> = ({
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
export default MockBasicInfoArea
