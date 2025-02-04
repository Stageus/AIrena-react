export const validateInput = (email: string, password: string): string => {
  if (!email || !password) {
    return '이메일과 비밀번호를 모두 입력해주세요.'
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return '올바른 이메일 형식을 입력해주세요.'
  }
  return ''
}
