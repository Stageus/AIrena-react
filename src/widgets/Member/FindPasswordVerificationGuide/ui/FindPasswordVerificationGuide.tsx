import { FindPasswordEmailGuide } from '#entities/member'
import { StandardButton } from '#shared/ui'
import { useLocation } from 'react-router-dom'
import { sendChangePasswordVerifyEmail } from '../model'
import styles from './FindPasswordVerificationGuide.module.scss'

export const FindPasswordVerificationGuide: React.FC = () => {
  const email = new URLSearchParams(useLocation().search).get('email')

  if (!email) {
    return null
  }

  return (
    <div className={styles['email-verification-guide']}>
      <FindPasswordEmailGuide email={email} />
      <StandardButton
        name={'인증 이메일 다시보내기'}
        onClick={() => {
          sendChangePasswordVerifyEmail(email)
        }}
      />
    </div>
  )
}
