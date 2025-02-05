import SharedButton from '#shared/components/Button/SharedButton'
import PasswordCheckInput from '#shared/components/Input/PasswordCheckInput/PasswordCheckInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import styles from './InfoInputArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['info-input-area']}>
      <div className={styles['input-container']}>
        <PasswordInput />
        <PasswordCheckInput />
      </div>
      <SharedButton name="비밀번호 변경" onClick={() => {}} />
    </div>
  )
}
export default Root
