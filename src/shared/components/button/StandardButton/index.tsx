import styles from './index.module.scss'

interface SharedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  onClick: () => void
}

const SharedButton: React.FC<SharedButtonProps> = ({ name, onClick }) => {
  return (
    <div className={styles['shared-button']} onClick={onClick}>
      <div className={styles['shared-button-text']}>{name}</div>
    </div>
  )
}

export default SharedButton
