import { ReactComponent as LeftPageIcon } from '#assets/icons/left_page_icon.svg'
import { ReactComponent as RightPageIcon } from '#assets/icons/right_page_icon.svg'
import styles from './index.module.scss'
import PageButton from './PageButton'

interface PaginationProps {
  firstPageNumber: number
  lastPageNumber: number
  currentPageNumber: number
}

const Pagination: React.FC<PaginationProps> = ({
  firstPageNumber,
  lastPageNumber,
  currentPageNumber,
}) => {
  return (
    <div className={styles['pagination-area']}>
      <div className={styles['left-page-button']}>
        <LeftPageIcon />
      </div>
      {Array.from({ length: lastPageNumber - firstPageNumber + 1 }, (_, i) => {
        const pageNumber = firstPageNumber + i
        return (
          <PageButton
            key={pageNumber}
            isSelected={pageNumber === currentPageNumber}
            number={pageNumber}
          />
        )
      })}
      <div className={styles['right-page-button']}>
        <RightPageIcon />
      </div>
    </div>
  )
}

export default Pagination
