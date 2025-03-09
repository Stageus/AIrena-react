import { UUID } from 'crypto'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const goNextQuizPage = (nextQuizIdx: UUID) => {
  navigate(`/mock/solve/${nextQuizIdx}`, { replace: true })
}

export const goMockResultPage = (mockIdx: UUID) => {
  navigate(`/mock/result/${mockIdx}`, { replace: true })
}
