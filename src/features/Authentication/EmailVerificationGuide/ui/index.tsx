import SharedButton from '#shared/components/button/StandardButton/StandardButton'
import WeightedTextOutput from '#shared/components/output/WeightedTextOutput'
import styles from './index.module.scss'

const EmailVerificationGuide: React.FC = ({}) => {
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
        <WeightedTextOutput text={'pine7420@naver.com'} />
        <div className={styles['text-3']}>로 인증 이메일을 발송했어요</div>
        <div className={styles['text-4']}>확인 후 가입을 완료해드릴게요</div>
      </div>
      <SharedButton name={'인증 이메일 다시보내기'} onClick={() => {}} />
    </div>
  )
}
export default EmailVerificationGuide
