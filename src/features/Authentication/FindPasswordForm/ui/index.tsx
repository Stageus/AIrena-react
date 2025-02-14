import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import IdInput from '#shared/components/input/IdInput'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestFindPassword } from '../api'
import styles from './index.module.scss'

const FindPasswordForm: React.FC = ({}) => {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate('/signup/email-verification-guide')
  }

  const handleOnClick = () => {
    const fetch = async () => {
      const result = await requestFindPassword({ id, email })
      if (result.status === 200) {
        goEmailVerificationGuidePage()
      }
    }

    fetch()
  }

  return (
    <div className={styles['find-password-form']}>
      <div className={styles['input-area']}>
        <IdInput setId={setId} />
        <EmailInput setEmail={setEmail} />
      </div>
      <SharedButton name="비밀번호 찾기" onClick={handleOnClick} />
    </div>
  )
}
export default FindPasswordForm
