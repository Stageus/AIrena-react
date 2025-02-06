import { RootState } from '#app/store'
import FindIdForm from '#features/Authentication/FindIdForm/ui'
import FindIdResultArea from '#features/Authentication/FindIdResultArea/ui'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

const FindIdPage: React.FC = () => {
  const showResult = useSelector((state: RootState) => state.findId.showResult)

  return (
    <div className={styles['narrow-background']}>
      {showResult == false && <FindIdForm />}
      {showResult == true && <FindIdResultArea />}
    </div>
  )
}
export default FindIdPage
