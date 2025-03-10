import DOMPurify from 'dompurify'
import styles from './BasicContent.module.scss'

interface BasicContentProps {
  title: string
  description: string
  images: string[]
}

export const BasicContent: React.FC<BasicContentProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <>
      <div className={styles['content-output-box']}>
        <div
          className={styles['content']}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description),
          }}
        ></div>
      </div>
      <div className={styles['image-output-box']}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles['img']}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </>
  )
}
