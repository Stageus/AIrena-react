import MocktestSolveArea from '#features/Mocktest/MocktestSolveArea/ui/MocktestSolveArea'
import React from 'react'
import styles from './index.module.scss'

const MocktestSolvePage: React.FC = () => {
  return (
    <div className={styles['mocktest-solve-container']}>
      <MocktestSolveArea />
    </div>
  )
}
export default MocktestSolvePage
