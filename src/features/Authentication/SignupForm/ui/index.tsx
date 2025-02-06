import InfoInputArea from '#features/Authentication/SignupForm/ui/InfoInputArea'
import React from 'react'
import './index.module.scss'

const SignupForm: React.FC = () => {
  return (
    <div className={'signup-form'}>
      <InfoInputArea />
    </div>
  )
}
export default SignupForm
