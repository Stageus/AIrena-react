import { ReactComponent as LeftPageIcon } from '#assets/icons/left_page_icon.svg'
import { ReactComponent as RightPageIcon } from '#assets/icons/right_page_icon.svg'
import PageButton from '#shared/components/PageButton/PageButton'
import styles from './Pagenation.module.css'

const Root = ({}) => {
  return (
    <div className={styles['pagenation-area']}>
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

export default Root
