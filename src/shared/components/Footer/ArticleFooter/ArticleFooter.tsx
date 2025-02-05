import { ReactComponent as LeftPageIcon } from '#assets/icons/left_page_icon.svg'
import { ReactComponent as RightPageIcon } from '#assets/icons/right_page_icon.svg'
import { ReactComponent as WriteIcon } from '#assets/icons/write_icon.svg'
import styles from './ArticleFooter.module.css'

const Root = ({}) => {
  return (
    <div className={styles['article-footer']}>
      <div className={styles['pagenation-and-write-footer']}>
        <div className={styles['pagenation-area']}>
          <div className={styles['left-page-button']}>
            <LeftPageIcon />
          </div>
          <div className={styles['button']}>
            <div className={styles['text-1']}>1</div>
          </div>
          <div className={styles['button-1']}>
            <div className={styles['text-2']}>2</div>
          </div>
          <div className={styles['button-2']}>
            <div className={styles['text-10']}>3</div>
          </div>
          <div className={styles['button-3']}>
            <div className={styles['text-9']}>4</div>
          </div>
          <div className={styles['button-4']}>
            <div className={styles['text-8']}>5</div>
          </div>
          <div className={styles['button-5']}>
            <div className={styles['text-7']}>6</div>
          </div>
          <div className={styles['button-6']}>
            <div className={styles['text-6']}>7</div>
          </div>
          <div className={styles['button-7']}>
            <div className={styles['text-5']}>8</div>
          </div>
          <div className={styles['button-8']}>
            <div className={styles['text-4']}>9</div>
          </div>
          <div className={styles['button-9']}>
            <div className={styles['text-3']}>10</div>
          </div>
          <div className={styles['right-page-button']}>
            <RightPageIcon />
          </div>
        </div>
        <div className={styles['write-button']}>
          <WriteIcon className={styles['write-icon']} />
          <div className={styles['text']}>작성</div>
        </div>
      </div>
      <div className={styles['search-footer']}>
        <div className={styles['keyword-input']}>
          <div className={styles['text-11']}>검색어를 입력하세요</div>
        </div>
        <div className={styles['search-button']}>
          <div className={styles['tedt']}>검색</div>
        </div>
      </div>
    </div>
  )
}
export default Root
