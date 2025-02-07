import React from 'react'
import { Outlet } from 'react-router-dom'
import IntroductionSection from './IntroductionSection'
import styles from './index.module.scss'

const IntroductionLayout: React.FC = () => {
  return (
    <div className={styles['with-introduction-section-layout']}>
      <IntroductionSection />
      <div className={styles['wide-background']}>
        <Outlet />
      </div>
    </div>
  )
}
export default IntroductionLayout
