import { AppDispatch } from '#app/store'
import { setShowResult } from '#features/Authentication/FindId/model/FindIdSlice'
import SharedButton from '#shared/components/Button/SharedButton'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import { useDispatch } from 'react-redux'
import styles from './InfoInputArea.module.css'

const Root = ({}) => {
  const dispatch: AppDispatch = useDispatch()
  const handleOnClick = (): void => {
    dispatch(setShowResult(true))
  }

  return (
    <div className={styles['info-input-area']}>
      <EmailInput />
      <SharedButton name="아이디 찾기" onClick={handleOnClick} />
    </div>
  )
}
export default Root
