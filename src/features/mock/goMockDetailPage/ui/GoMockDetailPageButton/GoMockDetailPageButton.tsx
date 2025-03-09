import { UUID } from 'crypto'
import { useParams } from 'react-router-dom'
import { goMockDetail } from '../../libs'
import styles from './GoMockDetailPageButton.module.scss'

export const GoMockDetailPageButton = () => {
  const { idx } = useParams<{ idx: UUID }>()

  if (!idx) {
    return null
  }

  return (
    <div
      onClick={() => {
        goMockDetail(idx)
      }}
      className={styles['ok-button']}
    >
      <div className={styles['text-3']}>확인</div>
    </div>
  )
}
