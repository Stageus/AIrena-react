import { UUID } from 'crypto'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const goQuizGradingPage = (idx: UUID) => {
  navigate(`/mock/${idx}/quiz`, { replace: true })
}
