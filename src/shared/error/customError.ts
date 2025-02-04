export interface CustomError {
  status: number
  errorCode: string
  message: string
}

export const isCustomError = (error: any): error is CustomError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    'errorCode' in error &&
    'message' in error
  )
}
