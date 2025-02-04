import SharedButton from '#shared/components/Button/Button'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import { useNavigate } from 'react-router-dom'
import styles from './NormalLoginArea.module.css'

const Root = ({}) => {
  const navigate = useNavigate()

  const goSignup = () => {
    navigate('/signup')
  }

  return (
    <div className={styles['frame---']}>
      <IdInput />
      <PasswordInput />
      <div className={styles['div']}>
        <div className={styles['text--']}>아이디 찾기</div>
        <div className={styles['text--2']}>|</div>
        <div className={styles['text---1']}>비밀번호 찾기</div>
        <div className={styles['text--3']}>|</div>
        <div onClick={goSignup} className={styles['text--4']}>
          회원가입
        </div>
      </div>
      <SharedButton name="로그인" onClick={() => {}} />
    </div>
  )
}
export default Root
