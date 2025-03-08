import { useNavigate } from 'react-router-dom'

export const goMockListPage = () => {
  useNavigate()('/mock/list')
}

export const goRootPage = () => {
  useNavigate()('/')
}
