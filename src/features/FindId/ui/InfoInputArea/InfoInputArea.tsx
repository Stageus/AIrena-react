import SharedButton from '#shared/components/Button/Button'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import styles from './InfoInputArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['frame---']}>
      <EmailInput />
      <SharedButton name="아이디 찾기" onClick={() => {}} />
    </div>
  )
}
export default Root
