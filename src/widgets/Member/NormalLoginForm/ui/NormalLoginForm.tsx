import SharedButton from '#shared/ui/button/Standard/Standard'
import IdInput from '#shared/ui/input/Id/Id'
import PasswordInput from '#shared/ui/input/Password/Password'
import { useEffect, useState } from 'react'
import { checkLoginWithNavigate, normalLoginWithNavigate } from '../model'
import { AuthButtons } from './AuthButtons/ui/AuthButtons'
import styles from './NormalLoginForm.module.scss'

export const NormalLoginForm: React.FC = () => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    checkLoginWithNavigate()
  }, [])

  return (
    <div className={styles['normal-login-form']}>
      <IdInput setId={setId} />
      <PasswordInput setPassword={setPassword} />
      <AuthButtons />
      <SharedButton
        name="로그인"
        onClick={() => {
          normalLoginWithNavigate(id, password)
        }}
      />
    </div>
  )
}
