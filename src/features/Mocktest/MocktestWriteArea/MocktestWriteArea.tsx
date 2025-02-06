import WriteFooter from '#shared/components/Footer/WriteFooter/WriteFooter'
import ImageUploadBox from '#shared/components/ImageUploadBox/ImageUploadBox'
import TextEditor from '#shared/components/TextEditor/TextEditor'
import React from 'react'
import styles from './MocktestWriteArea.module.css'
const Root = ({}) => {
  React.useEffect(() => {
    // Initialize the code
    return () => {}
  }, [])
  return (
    <div className={styles['mocktest-write-area']}>
      <div className={styles['text']}>모의고사 작성</div>
      <div className={styles['subject-input-area']}>
        <div className={styles['text-1']}>퀴즈 생성 주제</div>
        <div className={styles['subject-input-box']}>
          <div className={styles['subject-placholder']}>ex) 대한민국</div>
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
      <div className={styles['content-input-area']}>
        <div className={styles['text-5']}>내용</div>
        <TextEditor />
      </div>
      <ImageUploadBox />
      <WriteFooter />
    </div>
  )
}
export default Root
