import InfoInputArea from '#features/FindId/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import styles from './FindIdPage.module.css'

const FindIdPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default FindIdPage
