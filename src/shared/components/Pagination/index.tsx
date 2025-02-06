import { ReactComponent as LeftPageIcon } from '#assets/icons/left_page_icon.svg'
import { ReactComponent as RightPageIcon } from '#assets/icons/right_page_icon.svg'
import PageButton from './PageButton'
import styles from './index.module.scss'

const Pagination: React.FC = ({}) => {
  return (
    <div className={styles['pagination-area']}>
      <div className={styles['left-page-button']}>
        <LeftPageIcon />
      </div>
      <PageButton isSelected={true} number={1} />
      <PageButton isSelected={false} number={2} />
      <div className={styles['right-page-button']}>
        <RightPageIcon />
      </div>
    </div>
  )
}

export default Pagination
