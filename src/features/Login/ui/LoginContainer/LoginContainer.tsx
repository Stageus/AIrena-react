import styles from './LoginContainer.module.css'

import NormalLoginArea from '#features/Login/ui/NormalLoginArea/NormalLoginArea'
import SocialLoginArea from '#features/Login/ui/SocialLoginArea/SocialLoginArea'

const Root = ({}) => {
  return (
    <div className={styles['frame-div']}>
      <div className={styles['frame-']}>
        <div className={styles['frame-div-1']}>
          <NormalLoginArea />
          <SocialLoginArea />
        </div>
      </div>
    </div>
  )
}
export default Root
