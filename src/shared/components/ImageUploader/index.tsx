import { ReactComponent as UploadIcon } from '#assets/icons/upload_icon.svg'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface ImageUploaderProps {
  existingFiles: File[]
  setFiles: (files: File[]) => void
  existingUrls?: string[]
  setExistingUrls?: (urls: string[]) => void
  limit: number
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  existingFiles,
  setFiles,
  existingUrls,
  setExistingUrls,
  limit,
}) => {
  const createdUrls = useRef<string[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>(existingUrls || [])
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    if (files.length == 0) {
      return
    }

    if (existingFiles.length + (existingUrls?.length || 0) + 1 > limit) {
      alert(`최대 ${limit}개의 이미지만 업로드할 수 있습니다.`)
      return
    }

    if (existingFiles) {
      setFiles([...existingFiles, ...Array.from(files)])
    } else {
      setFiles(Array.from(files))
    }

    const newUrls: string[] = [
      ...previewUrls,
      ...Array.from(files).map((file) => URL.createObjectURL(file)),
    ]

    setPreviewUrls(newUrls)
    createdUrls.current.push(...newUrls)
  }

  const deleteImage = () => {
    if (!window.confirm('이미지를 삭제하시겠습니까')) {
      return
    }
  }

  useEffect(() => {
    return () => {
      createdUrls.current.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const ImageInput = (
    <input
      type="file"
      accept="image/*"
      ref={inputRef}
      style={{ display: 'none' }}
      onChange={onFileChange}
      multiple
    />
  )

  return (
    <div className={styles['image-uploader']}>
      <div className={styles['image-preview-content']}>
        {previewUrls.length > 0
          ? previewUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                className={styles['image-preview']}
                onClick={deleteImage}
              />
            ))
          : null}
      </div>

      <div className={styles['image-submit-content']}>
        <div onClick={handleDivClick} className={styles['image-upload-button']}>
          {ImageInput}
          <UploadIcon className={styles['upload-icon']} />
          <div className={styles['text']}>이미지 선택</div>
        </div>
        <div className={styles['extension-guide']}>
          PNG, JPG, GIF up to 10MB
        </div>
      </div>
    </div>
  )
}

export default ImageUploader
