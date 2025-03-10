import DOMPurify from 'dompurify'
import styles from './BasicContent.module.scss'

interface BasicContentProps {
  title: string
  description: string
  image: string
}

export const BasicContent: React.FC<BasicContentProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className={styles['title']}>{title}</div>
      <div
        className={styles['description']}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
      ></div>
      <div
        className={styles['thumbnail']}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </>
  )
}
