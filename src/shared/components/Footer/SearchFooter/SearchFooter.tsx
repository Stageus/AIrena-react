import styles from './SearchFooter.module.css'

const Root = ({}) => {
  return (
    <div className={styles['search-footer']}>
      <div className={styles['keyword-input']}>
        <div className={styles['text']}>검색어를 입력하세요</div>
      </div>
      <div className={styles['search-button']}>
        <div className={styles['text-1']}>검색</div>
      </div>
    </div>
  )
}
export default Root
