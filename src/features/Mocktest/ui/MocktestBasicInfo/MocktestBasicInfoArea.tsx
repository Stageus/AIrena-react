import styles from './MocktestBasicInfoArea.module.css'

const MocktestBasicInfoArea = ({}) => {
  return (
    <div className={styles['mocktest-basic-info-area']}>
      <div className={styles['writer-nickname-output-box']}>
        <svg id="96:5619" className={styles['nickname-icon']}></svg>
        <div className={styles['writer-nickname']}>작성자: 김스테이지어스</div>
      </div>
      <div className={styles['write-date-output-box']}>
        <svg id="96:5623" className={styles['date-icon']}></svg>
        <div className={styles['write-date']}>작성일: 2024.02.20</div>
      </div>
      <div className={styles['quiz-count-output-box']}>
        <svg id="96:5607" className={styles['quiz-count-icon']}></svg>
        <div className={styles['text-quiz-count']}>문제 수: 10문제</div>
      </div>
    </div>
  )
}
export default MocktestBasicInfoArea
