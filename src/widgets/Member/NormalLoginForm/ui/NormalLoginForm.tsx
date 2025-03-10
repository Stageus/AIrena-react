import { StandardButton } from '#shared/ui/button/StandardButton/StandardButton'
import { IdInput } from '#shared/ui/input/IdInput/IdInput'
import { PasswordInput } from '#shared/ui/input/PasswordInput/PasswordInput'
import { useEffect, useState } from 'react'
import { AuthButtons } from '../../AuthButtons/ui/AuthButtons'
import { checkLoginWithNavigate, normalLoginWithNavigate } from '../model'
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
      <StandardButton
        name="로그인"
        onClick={() => {
          normalLoginWithNavigate(id, password)
        }}
      />
    </div>
  )
}
