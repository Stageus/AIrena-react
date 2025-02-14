import EmailVerificationGuideArea from '#features/Authentication/EmailVerificationGuide/ui'
import React from 'react'
import styles from './index.module.scss'

const EmailVerificationGuidePage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <EmailVerificationGuideArea />
    </div>
  )
}
export default EmailVerificationGuidePage
