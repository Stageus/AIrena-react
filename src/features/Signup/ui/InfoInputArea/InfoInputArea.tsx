import SharedButton from '#shared/components/Button/SharedButton'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import PasswordCheckInput from '#shared/components/Input/PasswordCheckInput/PasswordCheckInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import styles from './InfoInputArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['info-input-area']}>
      <div className={styles['input-container']}>
        <IdInput />
        <PasswordInput />
        <PasswordCheckInput />
        <EmailInput />
      </div>
      <SharedButton name="회원가입" onClick={() => {}} />
    </div>
  )
}
export default Root
