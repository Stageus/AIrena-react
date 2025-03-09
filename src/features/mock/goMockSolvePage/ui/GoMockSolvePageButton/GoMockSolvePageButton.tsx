import { UUID } from 'crypto'
import { goToSolvePage } from '../../libs'
import styles from './GoMockSolvePageButton.module.scss'
import { ReactComponent as SolveIcon } from './solve-icon.svg'

interface GoMockSolvePageButtonProps {
  idx: UUID
}

export const GoMockSolvePageButton: React.FC<GoMockSolvePageButtonProps> = ({
  idx,
}) => {
  return (
    <div
      onClick={() => {
        goToSolvePage(idx)
      }}
      className={styles['mock-solve-button']}
    >
      <SolveIcon className={styles['solve-icon']} />
      <div className={styles['text']}>모의고사 풀기</div>
    </div>
  )
}
