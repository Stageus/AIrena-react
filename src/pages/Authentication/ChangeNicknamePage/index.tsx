import InfoInputArea from '#features/Authentication/ChangeNicknameForm/ui/InfoInputArea'
import React from 'react'
import styles from './index.module.scss'

const ChangeNicknamePage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default ChangeNicknamePage
