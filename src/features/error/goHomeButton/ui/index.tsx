import { HomeIcon } from '#shared/icons'
import { goMockListPage } from '#shared/libs'

export const GoHomeButton: React.FC = () => {
  return (
    <div onClick={goMockListPage} className={styles['home-button']}>
      <HomeIcon className={styles['home-icon']} />
      <div className={styles['text-2']}>홈으로 돌아가기</div>
    </div>
  )
}
