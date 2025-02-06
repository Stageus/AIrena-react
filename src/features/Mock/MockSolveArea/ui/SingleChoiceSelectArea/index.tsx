import styles from './index.module.scss'

const SingleChoiceSelectArea: React.FC = () => {
  return (
    <div className={styles['single-choice-select-area']}>
      <div className={styles['choice-box-column-area']}>
        <div className={styles['choice-box']}>
          <div className={styles['text']}>선택지</div>
        </div>
        <div className={styles['choice-box']}>
          <div className={styles['text']}>선택지</div>
        </div>
      </div>
      <div className={styles['choice-box-column-area']}>
        <div className={styles['choice-box']}>
          <div className={styles['text']}>선택지</div>
        </div>
        <div className={styles['choice-box']}>
          <div className={styles['text']}>선택지</div>
        </div>
      </div>
    </div>
  )
}
export default SingleChoiceSelectArea
