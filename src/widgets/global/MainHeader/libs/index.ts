import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const goMockPage = () => {
  navigate('/mock/list')
}

export const goTotalRankPage = () => {
  navigate('/rank/total')
}
