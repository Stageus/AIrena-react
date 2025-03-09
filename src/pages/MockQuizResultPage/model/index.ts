import { UUID } from 'crypto'
import { requestMockAnswer } from '../api'
import { goMockResultPage } from '../libs'

export const mockAnswerWithNavigation = (mockIdx: UUID) => {
  const fetchData = async () => {
    await requestMockAnswer(mockIdx)
    goMockResultPage(mockIdx)
  }

  fetchData()
}
