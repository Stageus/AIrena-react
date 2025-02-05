import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './HorizontalRootPage.module.css'

const WithIntroductionSectionLayout: React.FC = () => {
  return (
    <div className={styles['root-page']}>
      <Outlet />
    </div>
  )
}
export default WithIntroductionSectionLayout
