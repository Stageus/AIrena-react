import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createCustomAsyncThunk } from '#shared/utils/createCustomAsyncThunk'
import axiosInstance from '#shared/api/axiosInstance'
import { User } from '#entities/User'
import { initialState, LoginCredentials, RegisterCredentials } from './types'

export const login = createCustomAsyncThunk<User, LoginCredentials>(
  'auth/login',
  (loginCredentials: LoginCredentials) =>
    axiosInstance.post<User>('/api/login', loginCredentials),
)

export const register = createCustomAsyncThunk<User, RegisterCredentials>(
  'auth/register',
  (registerCredentials: RegisterCredentials) =>
    axiosInstance.post<User>('/api/register', registerCredentials),
)

export const logout = createCustomAsyncThunk<void, void>('auth/logout', () =>
  axiosInstance.post('/api/logout'),
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    clearError(state) {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    // 로그인
    builder.addCase(login.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(
      login.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false
        state.error = action.payload || '로그인 실패'
      },
    )

    // 회원가입
    builder.addCase(register.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(
      register.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
      },
    )
    builder.addCase(
      register.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false
        state.error = action.payload || '회원가입 실패'
      },
    )

    // 로그아웃
    builder.addCase(logout.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false
      state.user = null
    })
    builder.addCase(
      logout.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false
        state.error = action.payload || '로그아웃 실패'
      },
    )
  },
})

export const { setUser, clearError } = authSlice.actions

export default authSlice.reducer
