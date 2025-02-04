import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { CustomError, isCustomError } from '#shared/error/customError'

export const createCustomAsyncThunk = <Returned, ThunkArg>(
  typePrefix: string,
  apiCall: (args: ThunkArg) => Promise<AxiosResponse<Returned, any>>,
) =>
  createAsyncThunk<Returned, ThunkArg, { rejectValue: string }>(
    typePrefix,
    async (args, thunkAPI) => {
      try {
        const response = await apiCall(args)
        return response.data
      } catch (error: any) {
        if (isCustomError(error)) {
          return thunkAPI.rejectWithValue(error.message)
        } else {
          return thunkAPI.rejectWithValue('알 수 없는 오류가 발생했습니다')
        }
      }
    },
  )
