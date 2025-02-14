import SharedButton from '#shared/components/button/StandardButton'
import NicknameInput from '#shared/components/input/NicknameInput'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const ChangeNicknameForm: React.FC = () => {
  const navigate = useNavigate()
  const goMockPage = () => {
    navigate('/mock')
  }
  return (
    <div className={styles['change-nickname-form']}>
      <NicknameInput />
      <SharedButton name="확인" onClick={goMockPage} />
    </div>
  )
}

export default ChangeNicknameForm
