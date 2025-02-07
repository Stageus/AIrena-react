import MainHeader from '#shared/components/header/MainHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const MainHeaderLayout: React.FC = () => {
  return (
    <div className={styles['with-main-header-layout']}>
      <MainHeader />
      <Outlet />
    </div>
  )
}
export default MainHeaderLayout
