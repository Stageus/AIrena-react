import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const HorizontalRootPage: React.FC = () => {
  return (
    <div className={styles['root-page']}>
      <Outlet />
    </div>
  )
}
export default HorizontalRootPage
