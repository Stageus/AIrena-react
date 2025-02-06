import SharedButton from '#shared/components/Button/StandardButton/StandardButton'
import PasswordCheckInput from '#shared/components/Input/PasswordCheckInput/PasswordCheckInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import styles from './index.module.scss'

const ChangePasswordForm: React.FC = () => {
  return (
    <div className={styles['change-password-form']}>
      <div className={styles['input-area']}>
        <PasswordInput />
        <PasswordCheckInput />
      </div>
      <SharedButton name="비밀번호 변경" onClick={() => {}} />
    </div>
  )
}
export default ChangePasswordForm
