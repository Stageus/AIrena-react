import styles from './Standard.module.scss'

interface StandardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  onClick: () => void
}

export const Standard: React.FC<StandardProps> = ({ name, onClick }) => {
  return (
    <div className={styles['shared-button']} onClick={onClick}>
      <div className={styles['shared-button-text']}>{name}</div>
    </div>
  )
}
