import WriteFooter from '#shared/components/article/ArticleWriteFooter'
import ImageUploadBox from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import styles from './index.module.scss'

const NoticeWriteArea: React.FC = () => {
  return (
    <div className={styles['notice-write-area']}>
      <div className={styles['text']}>공지사항 작성</div>
      <div className={styles['title-input-area']}>
        <div className={styles['text-1']}>제목</div>
        <div className={styles['title-input-box']}>
          <div className={styles['title-input-placeholder']}>
            ex) 대한민국 상식 퀴즈
          </div>
        </div>
      </div>
      <div className={styles['content-input-area']}>
        <div className={styles['text-2']}>내용</div>
        <TextEditor />
      </div>
      <div className={styles['image-submit-area']}>
        <div className={styles['text-3']}>이미지 등록</div>
        <ImageUploadBox />
      </div>
      <WriteFooter />
    </div>
  )
}
export default NoticeWriteArea
