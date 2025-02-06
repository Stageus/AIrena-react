import MainHeader from '#shared/components/header/MainHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const WithMainHeaderLayout: React.FC = () => {
  return (
    <>
      <MainHeader />
      <div className={styles['main-area']}>
        <Outlet />
      </div>
    </>
  )
}
export default WithMainHeaderLayout
