import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import IdInput from '#shared/components/input/IdInput'
import { useState } from 'react'
import { findPasswordWithNavigation } from '../model'
import styles from './FindPasswordForm.module.scss'

export const FindPasswordForm: React.FC = () => {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className={styles['find-password-form']}>
      <div className={styles['input-area']}>
        <IdInput setId={setId} />
        <EmailInput setEmail={setEmail} />
      </div>
      <SharedButton
        name="비밀번호 찾기"
        onClick={() => {
          findPasswordWithNavigation(id, email)
        }}
      />
    </div>
  )
}
