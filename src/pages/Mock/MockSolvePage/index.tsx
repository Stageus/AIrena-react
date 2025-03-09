import React from 'react'
import MockSolveArea from 'src/widgets/mock/MockSolveArea/ui'
import styles from './index.module.scss'

const MockSolvePage: React.FC = () => {
  return (
    <div className={styles['mock-solve-container']}>
      <MockSolveArea />
    </div>
  )
}
export default MockSolvePage
