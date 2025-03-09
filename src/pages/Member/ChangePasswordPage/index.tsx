import React from 'react'
import ChangePasswordForm from 'src/widgets/member/ChangePasswordForm/ui/ChangePasswordForm'
import styles from './index.module.scss'

const ChangePasswordPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <ChangePasswordForm />
    </div>
  )
}
export default ChangePasswordPage
