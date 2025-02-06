import React from 'react'
import styles from './MocktestLegend.module.css'
const Root = ({}) => {
  React.useEffect(() => {
    // Initialize the code
    return () => {}
  }, [])
  return (
    <div className={styles['mocktest-legend']}>
      <div className={styles['number-output-box']}>
        <div className={styles['number']}>번호</div>
      </div>
      <div className={styles['title-output-box']}>
        <div className={styles['title']}>제목</div>
      </div>
      <div className={styles['write-nickname-output-box']}>
        <div className={styles['writer-nickname']}>작성자</div>
      </div>
      <div className={styles['write-date-output-box']}>
        <div className={styles['write-date']}>작성일</div>
      </div>
      <div className={styles['like-count-output-box']}>
        <div className={styles['content-box']}>
          <div className={styles['like-count']}>좋아요</div>
        </div>
      </div>
    </div>
  )
}
export default Root
