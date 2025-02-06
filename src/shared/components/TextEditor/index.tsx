import styles from './index.module.scss'

const TextEditor: React.FC = () => {
  return (
    <div className={styles['text-editor']}>
      <svg id="60:8862" className={styles['div']}></svg>
      <div className={styles['content-input-box']}>
        <div className={styles['content-place-holder']}>
          ex) 누구나 알 수 있는 대한민국 상식 퀴즈 입니다
        </div>
      </div>
    </div>
  )
}

export default TextEditor
