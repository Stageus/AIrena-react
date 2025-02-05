import styles from './SharedButton.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  onClick: () => void
}

const SharedButton: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div className={styles['shared-button']} onClick={onClick}>
      <div className={styles['shared-button-text']}>{name}</div>
    </div>
  )
}

export default SharedButton
