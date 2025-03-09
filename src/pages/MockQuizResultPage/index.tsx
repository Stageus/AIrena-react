import React from 'react'
import MockQuizResultArea from 'src/widgets/mock/MockQuizResultArea/ui'
import styles from './index.module.scss'

const MockQuizResultPage: React.FC = () => {
  return (
    <div className={styles['mock-submit-answer-grading-container']}>
      <MockQuizResultArea />
    </div>
  )
}
export default MockQuizResultPage
