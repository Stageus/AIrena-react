import FindIdArea from '#features/Member/FindIdArea/ui/FindIdArea'
import React from 'react'
import styles from './index.module.scss'

const FindIdPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <FindIdArea />
    </div>
  )
}
export default FindIdPage
