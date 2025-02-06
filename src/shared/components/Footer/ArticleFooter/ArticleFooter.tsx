import { ReactComponent as WriteIcon } from '#assets/icons/write_icon.svg'
import SearchFooter from '#shared/components/Footer/SearchFooter/SearchFooter'
import Pagenation from '#shared/components/Pagenation/Pagenation'
import { useNavigate } from 'react-router-dom'
import styles from './ArticleFooter.module.css'

const Root = ({}) => {
  const naviagte = useNavigate()

  const goMocktestWritePage = () => {
    naviagte('/mocktest/write')
  }
  return (
    <div className={styles['article-footer']}>
      <div className={styles['pagenation-and-write-footer']}>
        <Pagenation />
        <div onClick={goMocktestWritePage} className={styles['write-button']}>
          <WriteIcon className={styles['write-icon']} />
          <div className={styles['text']}>작성</div>
        </div>
      </div>
      <SearchFooter />
    </div>
  )
}
export default Root
