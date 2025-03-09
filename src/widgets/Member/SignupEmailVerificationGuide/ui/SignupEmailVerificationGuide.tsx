import { SignupEmailGuide } from '#entities/member'
import SharedButton from '#shared/components/button/StandardButton'
import { useLocation } from 'react-router-dom'
import { sendSignupVerifyEmail } from '../model'
import styles from './SignupEmailVerificationGuide.module.scss'

export const SignupEmailVerificationGuide: React.FC = () => {
  const email = new URLSearchParams(useLocation().search).get('email') || ''

  return (
    <div className={styles['email-verification-guide']}>
      <SignupEmailGuide email={email} />
      <SharedButton
        name={'인증 이메일 다시보내기'}
        onClick={() => {
          sendSignupVerifyEmail(email)
        }}
      />
    </div>
  )
}
