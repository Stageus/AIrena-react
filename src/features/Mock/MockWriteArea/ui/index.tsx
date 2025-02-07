import WriteFooter from '#shared/components/article/ArticleWriteFooter'
import ImageUploadBox from '#shared/components/ImageUploader'
import TextEditor from '#shared/components/TextEditor/ui'
import styles from './index.module.scss'
const MockWriteArea: React.FC = () => {
  return (
    <div className={styles['mock-write-area']}>
      <div className={styles['text']}>모의고사 작성</div>
      <div className={styles['subject-input-area']}>
        <div className={styles['text-1']}>퀴즈 생성 주제</div>
        <div className={styles['subject-input-box']}>
          <div className={styles['subject-placeholder']}>ex) 대한민국</div>
        </div>
      </div>
      <div className={styles['quiz-count-input-area']}>
        <div className={styles['text-2']}>퀴즈 생성 개수(최대 10개 가능)</div>
        <div className={styles['subject-input-content']}>
          <div className={styles['quiz-count-input-box']}>
            <div className={styles['quiz-count-input-placeholder']}>ex) 10</div>
          </div>
          <div className={styles['text-3']}>개</div>
        </div>
      </div>
      <div className={styles['title-input-area']}>
        <div className={styles['text-4']}>제목</div>
        <div className={styles['title-input-box']}>
          <div className={styles['title-input-placeholder']}>
            ex) 대한민국 상식 퀴즈
          </div>
        </div>
      </div>
      <div className={styles['content-input-area']}>
        <div className={styles['text-5']}>내용</div>
        <TextEditor />
      </div>
      <div className={styles['image-submit-area']}>
        <div className={styles['text-6']}>썸네일 등록</div>
        <ImageUploadBox />
      </div>
      <WriteFooter />
    </div>
  )
}
export default MockWriteArea
