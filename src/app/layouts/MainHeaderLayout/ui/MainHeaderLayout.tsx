import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from 'src/widgets/global/MainHeader'
import styles from './index.module.scss'

export const MainHeaderLayout: React.FC = () => {
  return (
    <div className={styles['with-main-header-layout']}>
      <MainHeader />
      <Outlet />
    </div>
  )
}
