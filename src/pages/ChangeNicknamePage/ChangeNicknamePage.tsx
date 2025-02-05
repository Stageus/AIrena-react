import InfoInputArea from '#features/ChangeNickname/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import styles from './ChangeNicknamePage.module.css'

const ChangeNicknamePage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default ChangeNicknamePage
