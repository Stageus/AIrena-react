import { UUID } from 'crypto'
import { useNavigate } from 'react-router-dom'

export const goToSolvePage = (idx: UUID) => {
  useNavigate()(`/mock/solve/${idx}`)
}
