import ChangeNicknameForm from '#features/Member/ChangeNicknameForm/ui/ChangeNicknameForm'
import React from 'react'
import styles from './index.module.scss'

const ChangeNicknamePage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <ChangeNicknameForm />
    </div>
  )
}
export default ChangeNicknamePage
