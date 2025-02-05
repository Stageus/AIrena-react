import findIdReducer from '#features/FindId/model/FindIdSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    findId: findIdReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
