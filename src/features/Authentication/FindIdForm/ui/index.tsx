import { AppDispatch } from '#app/store'
import SharedButton from '#shared/components/Button/StandardButton/StandardButton'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
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
