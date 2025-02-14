import SharedButton from '#shared/components/button/StandardButton'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
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
