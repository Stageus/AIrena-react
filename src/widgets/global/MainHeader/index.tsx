import { ProfileIcon, RankIcon } from '#shared/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import ProfileModal from './ProfileModal'

const MainHeader: React.FC = () => {
  const [showProfileModal, setShowProfileModal] = useState(false)

  const navigate = useNavigate()
  const goMockPage = () => {
    navigate('/mock/list')
  }
  const goTotalRankPage = () => {
    navigate('/rank/total')
  }

  const toggleProfileModal = () => {
    setShowProfileModal((prev) => !prev)
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
      <div className={styles['util-button-content']}>
        <div onClick={goTotalRankPage} className={styles['total-rank-button']}>
          <RankIcon className={styles['rank-icon']} />
          <div className={styles['text']}>전체 랭킹</div>
        </div>
        <ProfileIcon
          onClick={toggleProfileModal}
          className={styles['profile-icon']}
        />
      </div>
      {showProfileModal && <ProfileModal />}
    </div>
  )
}
export default MainHeader
