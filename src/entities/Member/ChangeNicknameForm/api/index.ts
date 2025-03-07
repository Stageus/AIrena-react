import axiosInstance from '#shared/api/axiosInstance'

interface RequestChangeNickname {
  nickname: string
}

export const requestChangeNickname = async (request: RequestChangeNickname) => {
  return await axiosInstance.patch<void>('/member/change/nickname', request)
}
