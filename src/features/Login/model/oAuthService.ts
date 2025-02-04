const API_URL = import.meta.env.VITE_API_URL

export const goGoogleLoginPage = (): void => {
  window.location.href = `${API_URL}/login/google`
}

export const goKakaoLoginPage = (): void => {
  window.location.href = `${API_URL}/login/kakao`
}
