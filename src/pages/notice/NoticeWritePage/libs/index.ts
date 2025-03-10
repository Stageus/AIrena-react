export const addToFormData = (
  title: string,
  content: string,
  files: File[] | null,
) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('content', content)
  if (files) {
    Array.from(files).forEach((file) => {
      formData.append('image', file)
    })
  }
  return formData
}
