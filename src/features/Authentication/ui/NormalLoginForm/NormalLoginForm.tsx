import React, { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/app/store'
import Button from '#shared/components/Button/Button'
import ErrorMessage from '#features/Authentication/ui/ErrorMessage/ErrorMessage'
import { login } from '#features/Authentication/model/authenticationSlice'
import { validateInput } from './NormalLoginForm.validation'
import styles from './NormalLoginForm.module.css'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationError = validateInput(email, password)
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setLoading(true)

    try {
      await dispatch(login({ email, password })).unwrap()
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>로그인</h2>
      {error && <ErrorMessage message={error} />}
      <div className={styles['form-group']}>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 입력"
          required
          disabled={loading}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
          required
          disabled={loading}
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? '로그인 중...' : '로그인'}
      </Button>
    </form>
  )
}

export default LoginForm
