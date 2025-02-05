import IntroductionSection from '#shared/components/WithIntroductionSectionLayout/IntroductionSection/IntroductionSection'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './WithIntroductionSectionLayout.module.css'

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
