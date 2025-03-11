import axiosInstance from '#shared/api/axiosInstance'
import { RequestChangeNickname, RequestChangePassword } from './types'

export const requestChangeNickname = async (request: RequestChangeNickname) => {
  return await axiosInstance.patch<void>('/member/change/nickname', request)
}

export const requestChangePassword = async (request: RequestChangePassword) => {
  return await axiosInstance.patch<void>('/member/change/password', request)
}
