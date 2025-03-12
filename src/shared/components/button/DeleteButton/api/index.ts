import axiosInstance from '#shared/api/axiosInstance'

export const requestDeleteArticle = async (section: string, idx: string) => {
  await axiosInstance.delete(`/${section}/${idx}`)
}
