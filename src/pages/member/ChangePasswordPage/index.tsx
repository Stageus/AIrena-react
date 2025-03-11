import { changePasswordWithNavigation } from '#entities/member'
import { StandardButton } from '#shared/ui/button/StandardButton/StandardButton'
import { PasswordCheckInput } from '#shared/ui/input/PasswordCheckInput/PasswordCheckInput'
import { PasswordInput } from '#shared/ui/input/PasswordInput/PasswordInput'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './ChangePasswordPage.module.scss'

export const ChangePasswordPage: React.FC = () => {
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const token = searchParams.get('token') as string

  return (
    <div className={styles['narrow-background']}>
      <div className={styles['change-password-form']}>
        <div className={styles['input-area']}>
          <PasswordInput setPassword={setPassword} />
          <PasswordCheckInput setPasswordCheck={setPasswordCheck} />
        </div>
        <StandardButton
          name="비밀번호 변경"
          onClick={() => {
            changePasswordWithNavigation(password, passwordCheck, token)
          }}
        />
      </div>
    </div>
  )
}
