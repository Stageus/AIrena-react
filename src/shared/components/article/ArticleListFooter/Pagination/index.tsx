import { ReactComponent as LeftPageIcon } from '#assets/icons/left_page_icon.svg'
import { ReactComponent as RightPageIcon } from '#assets/icons/right_page_icon.svg'
import styles from './index.module.scss'
import PageButton from './PageButton'

interface PaginationProps {
  firstPageNumber: number
  lastPageNumber: number
  prevPageExist: boolean
  nextPageExist: boolean
  currentPageNumber: number
  setCurrent: (current: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  firstPageNumber,
  lastPageNumber,
  currentPageNumber,
  prevPageExist,
  nextPageExist,
  setCurrent,
}) => {
  const goPrevPage = () => {
    setCurrent(firstPageNumber - 1)
  }
  const goNextPage = () => {
    setCurrent(lastPageNumber + 1)
  }
  return (
    <div className={styles['pagination-area']}>
      {prevPageExist && (
        <div className={styles['left-page-button']} onClick={goPrevPage}>
          <LeftPageIcon />
        </div>
      )}
      {Array.from({ length: lastPageNumber - firstPageNumber + 1 }, (_, i) => {
        const pageNumber = firstPageNumber + i
        return (
          <PageButton
            key={pageNumber}
            setCurrent={setCurrent}
            isSelected={pageNumber === currentPageNumber}
            number={pageNumber}
          />
        )
      })}
      {nextPageExist && (
        <div className={styles['right-page-button']} onClick={goNextPage}>
          <RightPageIcon />
        </div>
      )}
    </div>
  )
}

export default Pagination
