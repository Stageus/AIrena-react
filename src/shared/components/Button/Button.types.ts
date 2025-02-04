export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}
