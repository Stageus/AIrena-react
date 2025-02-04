export interface LoginFormProps {
  onLoginSuccess: (user: { id: number; name: string; email: string }) => void
}
