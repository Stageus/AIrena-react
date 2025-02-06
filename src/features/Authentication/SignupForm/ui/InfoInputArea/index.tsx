import SharedButton from '#shared/components/Button/StandardButton/StandardButton'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import PasswordCheckInput from '#shared/components/Input/PasswordCheckInput/PasswordCheckInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const Root = ({}) => {
  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate('/email-verification-guide')
  }
  return (
    <>
      <div className={styles['info-input-area']}>
        <IdInput />
        <PasswordInput />
        <PasswordCheckInput />
        <EmailInput />
      </div>
      <SharedButton name="회원가입" onClick={goEmailVerificationGuidePage} />
    </>
  )
}
export default Root
