import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FindIdState {
  showResult: boolean
}

const initialState: FindIdState = {
  showResult: false,
}

const findIdSlice = createSlice({
  name: 'findId',
  initialState,
  reducers: {
    setShowResult(state, action: PayloadAction<boolean>) {
      state.showResult = action.payload
    },
  },
})

export const { setShowResult } = findIdSlice.actions
export default findIdSlice.reducer
