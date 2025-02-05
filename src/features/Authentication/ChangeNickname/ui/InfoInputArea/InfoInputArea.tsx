import SharedButton from '#shared/components/Button/StandardButton/StandardButton'
import NicknameInput from '#shared/components/Input/NicknameInput/\bNicknameInput'
import styles from './InfoInputArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['info-input-area']}>
      <NicknameInput />
      <SharedButton name="확인" onClick={() => {}} />
    </div>
  )
}
export default Root
