import { ReactComponent as LogoutIcon } from '#assets/icons/logout_icon.svg'
import { ReactComponent as ProfileIcon } from '#assets/icons/profile_icon.svg'
import { useNavigate } from 'react-router-dom'
import { requestLogout } from './api'
import styles from './index.module.scss'

const ProfileModal: React.FC = () => {
  const navigate = useNavigate()

  const goLoginPage = () => {
    navigate('/')
  }
  const goNicknameChangePage = () => {
    navigate('/change/nickname')
  }

  const handleClick = () => {
    const fetchData = async () => {
      const result = await requestLogout()
      if (result.status === 200) {
        goLoginPage()
      }
    }

    fetchData()
  }

  return (
    <div className={styles['profile-modal']}>
      <div onClick={goNicknameChangePage} className={styles['profile-box']}>
        <div className={styles['profile-content']}>
          <div className={styles['profile-icon-background']}>
            <ProfileIcon />
          </div>
          <div className={styles['nickname']}>똑똑한 너구리</div>
        </div>
      </div>
      <div className={styles['divisor']}></div>
      <div onClick={handleClick} className={styles['logout-button']}>
        <div className={styles['button-content']}>
          <LogoutIcon className={styles['logout-icon']} />
          <div className={styles['text']}>로그아웃</div>
        </div>
      </div>
    </div>
  )
}
export default ProfileModal
