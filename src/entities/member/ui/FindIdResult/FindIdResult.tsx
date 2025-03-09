import { goLoginPage } from '#shared/libs'
import SharedButton from '#shared/ui/button/StandardButton'
import WeightedTextOutput from '#shared/ui/output/WeightedTextOutput/WeightedTextOutput'
import styles from './FindIdResult.module.scss'

interface FindIdResponseProps {
  id: string
}

export const FindIdResult: React.FC<FindIdResponseProps> = ({ id }) => {
  return (
    <div className={styles['find-id-result-area']}>
      <div className={styles['find-id-result']}>아이디 찾기 결과</div>
      <WeightedTextOutput text={id} />
      <SharedButton name="로그인 페이지로 이동" onClick={goLoginPage} />
    </div>
  )
}
