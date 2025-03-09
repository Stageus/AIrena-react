import React from 'react'
import { FindIdArea } from 'src/widgets/member/FindIdArea'
import styles from './index.module.scss'

const FindIdPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <FindIdArea />
    </div>
  )
}
export default FindIdPage
