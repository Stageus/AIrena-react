export interface RequestChangeNickname {
  nickname: string
}

export interface RequestChangePassword {
  password: string
  passwordCheck: string
  token: string
}
