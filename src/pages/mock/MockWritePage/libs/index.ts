import { UUID } from 'crypto'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const goMockListPageWithConfirm = () => {
  const isConfirmed = window.confirm(
    '변경 내용이 초기화됩니다. 페이지를 벗어나시겠습니까?',
  )
  if (isConfirmed) {
    navigate('/mock/list')
  }
}

export const goMockPage = (idx: UUID) => {
  navigate(`/mock/${idx}`)
}
