import MockListArea from '#features/Mock/MockListArea/ui'
import React from 'react'
import styles from './index.module.scss'

const MockListPage: React.FC = () => {
  return (
    <div className={styles['mock-list-container']}>
      <MockListArea />
    </div>
  )
}
export default MockListPage
