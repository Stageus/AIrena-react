import SharedButton from '#shared/components/Button/SharedButton'
import WegihtedeTextOutput from '#shared/components/Output/WeightedTextOutput/WeightedTextOutput'
import { useNavigate } from 'react-router-dom'
import styles from './FindIdResultArea.module.css'

const Root = ({}) => {
  const navigate = useNavigate()

  const goLoginPage = (): void => {
    navigate('/')
  }

  return (
    <div className={styles['info-output-area']}>
      <div className={styles['find-id-result']}>아이디 찾기 결과</div>
      <WegihtedeTextOutput text={'pine7420'} />
      <SharedButton name="로그인페이지로 이동" onClick={goLoginPage} />
    </div>
  )
}
export default Root
