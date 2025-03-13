import { ReactComponent as UploadIcon } from '#assets/icons/upload_icon.svg'
import { FileWithID, UrlWithID } from '#shared/model/file'
import { UUID } from 'crypto'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface ImageUploaderProps {
  existingFiles: FileWithID[]
  setFiles: (files: FileWithID[]) => void
  existingUrls?: UrlWithID[]
  setExistingUrls?: (urls: UrlWithID[]) => void
  limit: number
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  existingFiles,
  setFiles,
  existingUrls,
  setExistingUrls,
  limit,
}) => {
  const [previewUrls, setPreviewUrls] = useState<UrlWithID[]>(
    existingUrls || [],
  )
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

    const fileWithIds = Array.from(files).map((file) => ({
      file,
      id: window.crypto.randomUUID(),
    }))

    setFiles([...existingFiles, ...fileWithIds])

    const newUrls: UrlWithID[] = [
      ...previewUrls,
      ...fileWithIds.map((fileWithId) => ({
        url: URL.createObjectURL(fileWithId.file),
        id: fileWithId.id,
      })),
    ]

    setPreviewUrls(newUrls)

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const deleteImage = (id: UUID) => {
    if (!window.confirm('이미지를 삭제하시겠습니까')) {
      return
    }

    setPreviewUrls(
      previewUrls.filter((urlWithId) => {
        if (urlWithId.id === id) {
          URL.revokeObjectURL(urlWithId.url)
        }
        return urlWithId.id !== id
      }),
    )
    setFiles(existingFiles.filter((fileWithId) => fileWithId.id !== id))
    if (!setExistingUrls || !existingUrls) {
      return
    }
    setExistingUrls(existingUrls.filter((urlWithId) => urlWithId.id !== id))
  }

  useEffect(() => {
    return () => {
      previewUrls.forEach((urlWithId) => URL.revokeObjectURL(urlWithId.url))
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
          ? previewUrls.map((urlWithId, index) => (
              <img
                key={index}
                src={urlWithId.url}
                className={styles['image-preview']}
                onClick={() => deleteImage(urlWithId.id)}
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
