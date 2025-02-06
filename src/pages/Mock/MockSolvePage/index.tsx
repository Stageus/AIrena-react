import MockSolveArea from '#features/Mock/MockSolveArea/ui'
import React from 'react'
import styles from './index.module.scss'

const MockSolvePage: React.FC = () => {
  return (
    <div className={styles['mock-solve-container']}>
      <MockSolveArea />
    </div>
  )
}
export default MockSolvePage
