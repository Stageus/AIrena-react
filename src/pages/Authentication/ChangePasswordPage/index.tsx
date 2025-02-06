import InfoInputArea from '#features/Authentication/ChangePassword/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import styles from './index.module.scss'

const ChangePasswordPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default ChangePasswordPage
