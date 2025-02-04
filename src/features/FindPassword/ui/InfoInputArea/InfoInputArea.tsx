import SharedButton from '#shared/components/Button/Button'
import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import styles from './InfoInputArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['frame---']}>
      <div className={styles['frame-14']}>
        <IdInput />
        <EmailInput />
      </div>
      <SharedButton name="비밀번호 찾기" onClick={() => {}} />
    </div>
  )
}
export default Root
