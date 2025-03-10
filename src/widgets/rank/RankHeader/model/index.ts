export const ConvertToKoreanTier = (tier: string) => {
  if (tier === 'DIAMOND') {
    return '다이아몬드'
  }
  if (tier === 'PLATINUM') {
    return '플래티넘'
  }
  if (tier === 'GOLD') {
    return '골드'
  }
  if (tier === 'SILVER') {
    return '실버'
  }
  if (tier === 'BRONZE') {
    return '브론즈'
  }
  return '티어 선택'
}
