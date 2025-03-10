import { DateIcon, WriterIcon } from '#shared/icons'
import styles from './index.module.scss'

interface ArticleCreationBasicInfoAreaProps {
  nickname: string
  date: string
}

const ArticleCreationBasicInfoArea: React.FC<
  ArticleCreationBasicInfoAreaProps
> = ({ nickname, date }) => {
  return (
    <div className={styles['article-creation-basic-info-area']}>
      <div className={styles['writer-nickname-output-box']}>
        <WriterIcon className={styles['writer-icon']} />
        <div className={styles['writer-nickname']}>작성자: {nickname}</div>
      </div>
      <div className={styles['write-date-output-box']}>
        <DateIcon className={styles['date-icon']} />
        <div className={styles['write-date']}>작성일: {date}</div>
      </div>
    </div>
  )
}
export default ArticleCreationBasicInfoArea
