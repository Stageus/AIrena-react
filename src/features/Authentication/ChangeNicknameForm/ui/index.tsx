import SharedButton from '#shared/components/button/StandardButton/StandardButton'
import NicknameInput from '#shared/components/input/NicknameInput'
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
