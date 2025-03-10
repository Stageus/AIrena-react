import { FindPasswordEmailGuide } from '#entities/member'
import SharedButton from '#shared/ui/button/Standard/Standard'
import { useLocation } from 'react-router-dom'
import { sendChangePasswordVerifyEmail } from '../model'
import styles from './FindPasswordVerificationGuide.module.scss'

export const FindPasswordVerificationGuide: React.FC = () => {
  const email = new URLSearchParams(useLocation().search).get('email') || ''

  return (
    <div className={styles['email-verification-guide']}>
      <FindPasswordEmailGuide email={email} />
      <SharedButton
        name={'인증 이메일 다시보내기'}
        onClick={() => {
          sendChangePasswordVerifyEmail(email)
        }}
      />
    </div>
  )
}
