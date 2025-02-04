import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div className={styles['component--']} onClick={onClick}>
      <div className={styles['text-']}>{name}</div>
    </div>
  )
}

export default Button
