import MainHeader from '#shared/components/Header/MainHeader/MainHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './WithMainHeaderLayout.module.css'

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
