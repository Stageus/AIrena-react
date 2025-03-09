import styles from './index.module.scss'

interface SingleChoiceSelectAreaProps {
  choices: string[]
  handleSubmit: (
    singleChoiceAnswer: number | null,
    textAnswer: string | null,
  ) => void
}

const SingleChoiceSelectArea: React.FC<SingleChoiceSelectAreaProps> = ({
  choices,
  handleSubmit,
}) => {
  const handleClick = (index: number) => {
    handleSubmit(index, null)
  }

  return (
    <div className={styles['single-choice-select-area']}>
      <div className={styles['choice-box-column-area']}>
        <div className={styles['choice-box']}>
          <div onClick={() => handleClick(0)} className={styles['text']}>
            {choices[0]}
          </div>
        </div>
        <div className={styles['choice-box']}>
          <div onClick={() => handleClick(1)} className={styles['text']}>
            {choices[1]}
          </div>
        </div>
      </div>
      <div className={styles['choice-box-column-area']}>
        <div className={styles['choice-box']}>
          <div onClick={() => handleClick(2)} className={styles['text']}>
            {choices[2]}
          </div>
        </div>
        <div className={styles['choice-box']}>
          <div onClick={() => handleClick(3)} className={styles['text']}>
            {choices[3]}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleChoiceSelectArea
