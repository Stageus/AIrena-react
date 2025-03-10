import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const goRootPage = () => {
  navigate('/')
}

export const goLoginPage = () => {
  navigate('/')
}

export const goLoginRedirect = () => {
  navigate('/redirect/login')
}

export const goNicknameChangePage = () => {
  navigate('/change/nickname')
}

export const goMockListPage = () => {
  navigate('/mock/list')
}

export const goNoticePage = () => {
  navigate('/notice/list')
}
