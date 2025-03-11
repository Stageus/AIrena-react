import { GoHomeButton } from '#features/error'
import { NotFoundNotice } from '#widgets/error'
import styles from './index.module.scss'
export const Error404Page: React.FC = () => {
  return (
    <div className={styles['error-page']}>
      <NotFoundNotice />
      <GoHomeButton />
    </div>
  )
}
