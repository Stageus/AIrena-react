import { GoHomeButton } from '#features/error'
import { NotFoundNotice } from '#widgets/error'
import styles from './Error404Page.module.scss'

export const Error404Page: React.FC = () => {
  return (
    <div className={styles['error-container']}>
      <div className={styles['error-area']}>
        <NotFoundNotice />
        <GoHomeButton />
      </div>
    </div>
  )
}
