import React from 'react'
import { ChangeNicknameForm } from 'src/widgets/member/ChangeNicknameForm'
import styles from './index.module.scss'

const ChangeNicknamePage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <ChangeNicknameForm />
    </div>
  )
}
export default ChangeNicknamePage
