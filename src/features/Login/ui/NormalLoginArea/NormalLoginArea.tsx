import styles from './NormalLoginArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['frame---']}>
      <div className={styles['frame----1']}>
        <div className={styles['text-']}>아이디</div>
        <svg id="42:6644" className={styles['path']}></svg>
      </div>
      <div className={styles['frame----2']}>
        <div className={styles['text--1']}>비밀번호</div>
        <svg id="42:6656" className={styles['path-1']}></svg>
      </div>
      <div className={styles['div']}>
        <div className={styles['text--']}>아이디 찾기</div>
        <div className={styles['text--2']}>|</div>
        <div className={styles['text---1']}>비밀번호 찾기</div>
        <div className={styles['text--3']}>|</div>
        <div className={styles['text--4']}>회원가입</div>
      </div>
      <div className={styles['frame--']}>
        <div className={styles['text--5']}>로그인</div>
      </div>
    </div>
  )
}
export default Root
