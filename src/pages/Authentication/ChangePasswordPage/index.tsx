import ChangePasswordForm from '#features/Member/ChangePasswordForm/ui'
import React from 'react'
import styles from './index.module.scss'

const ChangePasswordPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <ChangePasswordForm />
    </div>
  )
}
export default ChangePasswordPage
