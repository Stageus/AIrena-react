import SharedButton from '#shared/components/button/StandardButton/StandardButton'
import WeightedTextOutput from '#shared/components/output/WeightedTextOutput'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const FindIdResultArea = ({}) => {
  const navigate = useNavigate()

  const goLoginPage = (): void => {
    navigate('/')
  }

  return (
    <div className={styles['.find-id-result-area']}>
      <div className={styles['find-id-result']}>아이디 찾기 결과</div>
      <WeightedTextOutput text={'pine7420'} />
      <SharedButton name="로그인페이지로 이동" onClick={goLoginPage} />
    </div>
  )
}
export default FindIdResultArea
