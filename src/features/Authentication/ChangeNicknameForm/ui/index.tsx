import SharedButton from '#shared/components/Button/StandardButton/StandardButton'
import NicknameInput from '#shared/components/Input/NicknameInput/NicknameInput'
import styles from './index.module.scss'

const ChangeNicknameForm: React.FC = () => {
  return (
    <div className={styles['change-nickname-form']}>
      <NicknameInput />
      <SharedButton name="확인" onClick={() => {}} />
    </div>
  )
}

export default ChangeNicknameForm
