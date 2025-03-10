import { SignupEmailGuide } from '#entities/member'
import { StandardButton } from '#shared/ui'
import { useLocation } from 'react-router-dom'
import { sendSignupVerifyEmail } from '../model'
import styles from './SignupEmailVerificationGuide.module.scss'

export const SignupEmailVerificationGuide: React.FC = () => {
  const email = new URLSearchParams(useLocation().search).get('email')

  if (!email) {
    return null
  }

  return (
    <div className={styles['email-verification-guide']}>
      <SignupEmailGuide email={email} />
      <StandardButton
        name={'인증 이메일 다시보내기'}
        onClick={() => {
          sendSignupVerifyEmail(email)
        }}
      />
    </div>
  )
}
