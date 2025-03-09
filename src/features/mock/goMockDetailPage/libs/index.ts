import { UUID } from 'crypto'
import { useNavigate } from 'react-router-dom'

export const goMockDetail = (idx: UUID) => {
  useNavigate()(`/mock/${idx}`)
}
