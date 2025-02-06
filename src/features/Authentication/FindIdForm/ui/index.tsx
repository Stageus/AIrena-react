import { AppDispatch } from '#app/store'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import SharedButton from '#shared/components/StandardButton/StandardButton'
import { useDispatch } from 'react-redux'
import { setShowResult } from '../model/FindIdSlice'
import styles from './index.module.scss'

const FindIdForm = ({}) => {
  const dispatch: AppDispatch = useDispatch()
  const handleOnClick = (): void => {
    dispatch(setShowResult(true))
  }

  return (
    <div className={styles['find-id-form']}>
      <EmailInput />
      <SharedButton name="아이디 찾기" onClick={handleOnClick} />
    </div>
  )
}
export default FindIdForm
