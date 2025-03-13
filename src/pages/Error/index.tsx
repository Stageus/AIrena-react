import { ReactComponent as HomeIcon } from '#assets/icons/home_icon.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const ErrorPage: React.FC = () => {
  const navigate = useNavigate()
  const goMockPage = () => {
    navigate('/mock')
  }
  return (
    <div className={styles['error-container']}>
      <div className={styles['error-area']}>
        <div className={styles['error-content-box']}>
          <div className={styles['big-logo']}>
            <img
              src="https://image-resource.creatie.ai/150880125742532/150880125742534/15d39dac9d72b571162790614bff07ce.png"
              className={styles['big-logo-1']}
            />
          </div>
          <div className={styles['text-404']}>404</div>
          <div className={styles['not-found-text']}>
            페이지를 찾을 수 없습니다
          </div>
          <div className={styles['error-message-content']}>
            <div className={styles['text']}>
              요청하신 페이지가 삭제되었거나 일시적으로 사용할 수 없습니다.
            </div>
            <div className={styles['text-1']}>
              입력하신 주소가 정확한지 다시 한번 확인해 주세요.
            </div>
          </div>
        </div>
        <div onClick={goMockPage} className={styles['home-button']}>
          <HomeIcon className={styles['home-icon']} />
          <div className={styles['text-2']}>홈으로 돌아가기</div>
        </div>
      </div>
    </div>
  )
}
export default ErrorPage
