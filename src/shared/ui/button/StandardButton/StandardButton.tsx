import styles from './StandardButton.module.scss'

interface StandardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  onClick: () => void
}

export const StandardButton: React.FC<StandardButtonProps> = ({
  name,
  onClick,
}) => {
  return (
    <div className={styles['shared-button']} onClick={onClick}>
      <div className={styles['shared-button-text']}>{name}</div>
    </div>
  )
}
