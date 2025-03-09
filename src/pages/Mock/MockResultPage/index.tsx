import React from 'react'
import MockResultArea from 'src/widgets/mock/MockResultArea'
import styles from './index.module.scss'

const MockResultPage: React.FC = () => {
  return (
    <div className={styles['mock-submit-answer-grading-container']}>
      <MockResultArea />
    </div>
  )
}
export default MockResultPage
