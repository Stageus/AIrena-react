import { LogoutIcon, ProfileIcon } from '#shared/icons'
import { goNicknameChangePage } from '#shared/libs'
import { useEffect, useState } from 'react'
import { ProfileResponse, requestProfile } from '../api'
import { logoutWithNavigate } from '../model'
import styles from './index.module.scss'

const ProfileModal: React.FC = () => {
  const [profileResponse, setProfileResponse] =
    useState<ProfileResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestProfile()
      if (result.status === 200) {
        setProfileResponse(result.data)
      }
    }

    fetchData()
  }, [])

  if (!profileResponse) {
    return null
  }

  const nickname: string = profileResponse.nickname

  return (
    <div className={styles['profile-modal']}>
      <div onClick={goNicknameChangePage} className={styles['profile-box']}>
        <div className={styles['profile-content']}>
          <div className={styles['profile-icon-background']}>
            <ProfileIcon />
          </div>
          <div className={styles['nickname']}>{nickname}</div>
        </div>
      </div>
      <div className={styles['divisor']}></div>
      <div onClick={logoutWithNavigate} className={styles['logout-button']}>
        <div className={styles['button-content']}>
          <LogoutIcon className={styles['logout-icon']} />
          <div className={styles['text']}>로그아웃</div>
        </div>
      </div>
    </div>
  )
}
export default ProfileModal
