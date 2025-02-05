import styles from './MocktestListArea.module.css'

const MocktestLikeArea = ({}) => {
  return (
    <div className={styles['mocktest-like-area']}>
      <div className={styles['like-output-area']}>
        <div className={styles['like']}>좋아요</div>
        <div className={styles['like-content']}>
          <svg id="96:8206" className={styles['like-icon']}></svg>
          <div className={styles['like-count']}>128</div>
        </div>
      </div>
      <div className={styles['like-button']}>
        <svg id="96:5547" className={styles['transparent-like-icon']}></svg>
        <div className={styles['text']}>좋아요</div>
      </div>
    </div>
  )
}
export default MocktestLikeArea
