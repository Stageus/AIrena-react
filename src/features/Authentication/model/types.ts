import { User } from '#entities/User'

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  password: string
}
