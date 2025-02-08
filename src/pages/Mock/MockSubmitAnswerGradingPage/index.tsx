import MockSubmitAnswerGradingArea from '#features/Mock/MockSubmitAnswerGradingArea'
import React from 'react'
import styles from './index.module.scss'

const MockSubmitAnswerGradingPage: React.FC = () => {
  return (
    <div className={styles['mock-submit-answer-grading-container']}>
      <MockSubmitAnswerGradingArea />
    </div>
  )
}
export default MockSubmitAnswerGradingPage
