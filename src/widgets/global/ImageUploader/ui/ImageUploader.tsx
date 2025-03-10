import { ImagePreview } from '#entities/global'
import { SubmitImageButton } from '#features/global/submitImage'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface ImageUploaderProps {
  setFiles: (files: File[]) => void
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ setFiles }) => {
  const createdUrls = useRef<string[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    if (files.length == 0) {
      return
    }
    setFiles(Array.from(files))
    updatePreviewUrls(Array.from(files))
  }

  const updatePreviewUrls = (files: File[]) => {
    const newUrls: string[] = [
      ...previewUrls,
      ...files.map((file) => URL.createObjectURL(file)),
    ] as string[]
    setPreviewUrls(newUrls)
    createdUrls.current.push(...newUrls)
  }

  useEffect(() => {
    return () => {
      createdUrls.current.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  return (
    <div className={styles['image-uploader']}>
      <ImagePreview previewUrls={previewUrls} />
      <div className={styles['image-submit-content']}>
        <SubmitImageButton handleFile={handleFile} />
        <div className={styles['extension-guide']}>
          PNG, JPG, GIF up to 10MB
        </div>
      </div>
    </div>
  )
}
