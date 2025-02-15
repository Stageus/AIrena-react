import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import WeightedTextOutput from '#shared/components/WeightedTextOutput'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FindIdResponse, requestFindId } from '../api'
import styles from './index.module.scss'

const FindIdForm = ({}) => {
  const [email, setEmail] = useState('')
  const [findIdResponse, setFindIdResponse] = useState<FindIdResponse | null>(
    null,
  )

  const handleOnClick = (): void => {
    const fetch = async () => {
      const result = await requestFindId({ email })
      if (!result) {
        return
      }
      if (result) {
        setFindIdResponse(result)
      }
    }

    fetch()
  }

  const navigate = useNavigate()

  const goLoginPage = (): void => {
    navigate('/')
  }

  return findIdResponse ? (
    <div className={styles['find-id-result-area']}>
      <div className={styles['find-id-result']}>아이디 찾기 결과</div>
      <WeightedTextOutput text={findIdResponse.id} />
      <SharedButton name="로그인페이지로 이동" onClick={goLoginPage} />
    </div>
  ) : (
    <div className={styles['find-id-form']}>
      <EmailInput setEmail={setEmail} />
      <SharedButton name="아이디 찾기" onClick={handleOnClick} />
    </div>
  )
}
export default FindIdForm
