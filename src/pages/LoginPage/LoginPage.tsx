import NormalLoginArea from '#features/Login/ui/NormalLoginArea/NormalLoginArea'
import SocialLoginArea from '#features/Login/ui/SocialLoginArea/SocialLoginArea'
import React from 'react'

const LoginPage: React.FC = () => {
  return (
    <div>
      <NormalLoginArea />
      <SocialLoginArea />
    </div>
  )
}
export default LoginPage
