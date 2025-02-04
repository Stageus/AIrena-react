import Authentication from '#features/Authentication/ui/Authentication/Authentication'
import React from 'react'
import './LoginPage.css'

const LoginPage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>로그인 페이지</h1>
      <Authentication />
    </div>
  )
}

export default LoginPage
