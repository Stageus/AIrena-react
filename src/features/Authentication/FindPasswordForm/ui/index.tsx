import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import SharedButton from '#shared/components/StandardButton/StandardButton'
import styles from './index.module.scss'

const FindPasswordForm: React.FC = ({}) => {
  return (
    <div className={styles['find-password-form']}>
      <div className={styles['input-area']}>
        <IdInput />
        <EmailInput />
      </div>
      <SharedButton name="비밀번호 찾기" onClick={() => {}} />
    </div>
  )
}
export default FindPasswordForm
