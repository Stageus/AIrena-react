import MockResultArea from '#entities/Mock/MockResultArea'
import React from 'react'
import styles from './index.module.scss'

const MockResultPage: React.FC = () => {
  return (
    <div className={styles['mock-submit-answer-grading-container']}>
      <MockResultArea />
    </div>
  )
}
export default MockResultPage
