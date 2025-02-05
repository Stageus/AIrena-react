import SharedButton from '#shared/components/Button/SharedButton'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import PasswordCheckInput from '#shared/components/Input/PasswordCheckInput/PasswordCheckInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import { useNavigate } from 'react-router-dom'
import styles from './InfoInputArea.module.css'

const Root = ({}) => {
  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate('/email-verification-guide')
  }
  return (
    <div className={styles['info-input-area']}>
      <div className={styles['input-container']}>
        <IdInput />
        <PasswordInput />
        <PasswordCheckInput />
        <EmailInput />
      </div>
      <SharedButton name="회원가입" onClick={goEmailVerificationGuidePage} />
    </div>
  )
}
export default Root
