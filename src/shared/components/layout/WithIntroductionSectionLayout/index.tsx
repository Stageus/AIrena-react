import React from 'react'
import { Outlet } from 'react-router-dom'
import IntroductionSection from './IntroductionSection'
import styles from './index.module.scss'

const WithIntroductionSectionLayout: React.FC = () => {
  return (
    <>
      <IntroductionSection />
      <div className={styles['wide-background']}>
        <Outlet />
      </div>
    </>
  )
}
export default WithIntroductionSectionLayout
