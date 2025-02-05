import { RootState } from '#app/store'
import FindIdResultArea from '#features/FindId/ui/FindIdResultArea/FindIdResultArea'
import InfoInputArea from '#features/FindId/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './FindIdPage.module.css'

const FindIdPage: React.FC = () => {
  const showResult = useSelector((state: RootState) => state.findId.showResult)

  return (
    <div className={styles['narrow-background']}>
      {showResult == false && <InfoInputArea />}
      {showResult == true && <FindIdResultArea />}
    </div>
  )
}
export default FindIdPage
