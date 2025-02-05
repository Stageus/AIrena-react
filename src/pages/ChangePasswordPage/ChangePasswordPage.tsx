import InfoInputArea from '#features/ChangePassword/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import styles from './ChangePasswordPage.module.css'

const ChangePasswordPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default ChangePasswordPage
