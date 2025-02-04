import IntroductionSection from '#shared/components/WithIntroductionSectionLayout/IntroductionSection/IntroductionSection'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './WithIntroductionSectionLayout.module.css'

const WithIntroductionSectionLayout: React.FC = () => {
  return (
    <div className={styles['frame--']}>
      <IntroductionSection />
      <div className={styles['instance----']}>
        <Outlet />
      </div>
    </div>
  )
}
export default WithIntroductionSectionLayout
