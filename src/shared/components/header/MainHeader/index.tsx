import { ReactComponent as ProfileIcon } from '#assets/icons/profile_icon.svg'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const MainHeader: React.FC = () => {
  const navigate = useNavigate()
  const goMockPage = () => {
    navigate('/mock')
  }

  return (
    <div className={styles['main-header']}>
      <div onClick={goMockPage} className={styles['logo-and-name']}>
        <div className={styles['mini-logo']}>
          <img
            src="https://image-resource.creatie.ai/150880125742532/150880125742534/15d39dac9d72b571162790614bff07ce.png"
            className={styles['mini-logo-1']}
          />
        </div>
        <div className={styles['airena']}>AIrena</div>
      </div>
      <ProfileIcon className={styles['profile-icon']} />
    </div>
  )
}
export default MainHeader
