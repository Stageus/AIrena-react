import IntroductionSection from '#shared/components/IntroductionSection/IntroductionSection'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './WithIntroductionSectionLayout.module.css'

const WithIntroductionSectionLayout: React.FC = () => {
  return (
    <div className={styles['frame--']}>
      <IntroductionSection />
      <div className={styles['frame-div']}>
        <div className={styles['frame-']}>
          <div className={styles['frame-div-1']}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
export default WithIntroductionSectionLayout
