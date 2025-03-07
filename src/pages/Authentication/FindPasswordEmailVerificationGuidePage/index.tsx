import FindPasswordVerificationGuide from '#entities/Authentication/FindPasswordVerificationGuide/ui'
import React from 'react'
import styles from './index.module.scss'

const FindPasswordEmailVerificationGuidePage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <FindPasswordVerificationGuide />
    </div>
  )
}
export default FindPasswordEmailVerificationGuidePage
