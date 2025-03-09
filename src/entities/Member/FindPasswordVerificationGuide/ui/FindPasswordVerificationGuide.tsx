import SharedButton from '#shared/components/button/StandardButton'
import WeightedTextOutput from '#shared/components/WeightedTextOutput'
import { useLocation } from 'react-router-dom'
import { sendChangePasswordVerifyEmail } from '../model'
import styles from './FindPasswordVerificationGuide.module.scss'

export const FindPasswordVerificationGuide: React.FC = () => {
  const email = new URLSearchParams(useLocation().search).get('email') || ''

  return (
    <div className={styles['email-verification-guide']}>
      <div className={styles['guide-text-output']}>
        <div className={styles['medium-logo']}>
          <img
            src="https://image-resource.creatie.ai/150880125742532/150880125742534/15d39dac9d72b571162790614bff07ce.png"
            className={styles['medium-logo-1']}
          />
        </div>
        <div className={styles['text']}>인증 메일 발송 안내</div>
        <div className={styles['text-1']}>입력하신</div>
        <WeightedTextOutput text={email} />
        <div className={styles['text-3']}>로 인증 이메일을 발송했어요</div>
        <div className={styles['text-4']}>
          확인 후 비밀번호 변경을 완료해드릴게요
        </div>
      </div>
      <SharedButton
        name={'인증 이메일 다시보내기'}
        onClick={() => {
          sendChangePasswordVerifyEmail(email)
        }}
      />
    </div>
  )
}
