import styles from './Greeitng.module.css'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/app/store'
import { logout } from '#features/Authentication/model/authenticationSlice'
import { GreetingProps } from './Greeting.types'

const Greeting: React.FC<GreetingProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={styles['welcome-section']}>
      <h2>환영합니다, {user.name}님!</h2>
      <button onClick={handleLogout} className={styles['logout-button']}>
        로그아웃
      </button>
    </div>
  )
}

export default Greeting
