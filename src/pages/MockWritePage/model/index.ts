const addToFormData = (
  subject: string,
  quizCount: number,
  title: string,
  content: string,
  files: File[] | null,
) => {
  const formData = new FormData()

  formData.append('subject', subject)
  formData.append('quizCount', quizCount.toString())
  formData.append('title', title)
  formData.append('description', content)
  if (files) {
    Array.from(files).forEach((file) => {
      formData.append('image', file)
    })
  }

  return formData
}
