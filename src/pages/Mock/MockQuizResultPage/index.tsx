import MockQuizResultArea from '#features/Mock/MockQuizResultArea/ui'
import React from 'react'
import styles from './index.module.scss'

const MockQuizResultPage: React.FC = () => {
  return (
    <div className={styles['mock-submit-answer-grading-container']}>
      <MockQuizResultArea />
    </div>
  )
}
export default MockQuizResultPage
