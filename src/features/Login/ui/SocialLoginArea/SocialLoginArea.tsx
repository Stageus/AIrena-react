import styles from './SocialLoginArea.module.css'
const Root = ({}) => {
  return (
    <div className={styles['frame---']}>
      <div className={styles['div']}>
        <div className={styles['div-1']}></div>
        <div className={styles['span']}>
          <div className={styles['text--']}>간편 로그인</div>
        </div>
      </div>
      <div className={styles['frame----1']}>
        <div className={styles['div-2']}>
          <div className={styles['rectangle--']}></div>
          <div className={styles['text---1']}>카카오로 로그인</div>
        </div>
      </div>
      <div className={styles['frame----2']}>
        <div className={styles['div-3']}>
          <div className={styles['rectangle---1']}></div>
          <div className={styles['text---2']}>구글로 로그인</div>
        </div>
      </div>
    </div>
  )
}
export default Root
