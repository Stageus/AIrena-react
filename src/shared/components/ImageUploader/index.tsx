import { ReactComponent as UploadIcon } from '#assets/icons/upload_icon.svg'
import { FileWithID, UrlWithID } from '#shared/model/file'
import { UUID } from 'crypto'
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './index.module.scss'

interface ImageUploaderProps {
  existingFiles: FileWithID[]
  setFiles: Dispatch<SetStateAction<FileWithID[]>>
  existingUrls?: UrlWithID[]
  setExistingUrls?: Dispatch<SetStateAction<UrlWithID[]>>
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
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const totalCount =
      existingFiles.length + (existingUrls?.length || 0) + files.length
    if (totalCount > limit) {
      alert(`최대 ${limit}개의 이미지만 업로드할 수 있습니다.`)
      return
    }

    const newFileWithIds: FileWithID[] = Array.from(files).map((file) => ({
      file,
      id: window.crypto.randomUUID(),
    }))

    const newPreviewUrls: UrlWithID[] = newFileWithIds.map((fileWithId) => ({
      url: URL.createObjectURL(fileWithId.file),
      id: fileWithId.id,
    }))

    setFiles((prevFiles: FileWithID[]) => [...prevFiles, ...newFileWithIds])
    setPreviewUrls((prevUrls: UrlWithID[]) => [...prevUrls, ...newPreviewUrls])

    if (inputRef.current) inputRef.current.value = ''
  }

  const deleteImage = (id: UUID) => {
    if (!window.confirm('이미지를 삭제하시겠습니까')) return

    const updatedPreviewUrls = previewUrls.filter((urlWithId) => {
      if (urlWithId.id === id) {
        URL.revokeObjectURL(urlWithId.url)
      }
      return urlWithId.id !== id
    })

    setPreviewUrls(updatedPreviewUrls)
    setFiles((prevFiles: FileWithID[]) =>
      prevFiles.filter((fileWithId: FileWithID) => fileWithId.id !== id),
    )
    if (setExistingUrls && existingUrls) {
      setExistingUrls((prevUrls: UrlWithID[]) =>
        prevUrls.filter((urlWithId: UrlWithID) => urlWithId.id !== id),
      )
    }
  }

  useEffect(() => {
    return () => {
      previewUrls.forEach((urlWithId) => URL.revokeObjectURL(urlWithId.url))
    }
  }, [previewUrls])

  const handleDivClick = () => {
    if (inputRef.current) inputRef.current.click()
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
        {previewUrls.length > 0 &&
          previewUrls.map((urlWithId, index) => (
            <img
              key={urlWithId.id} // ID를 key로 사용해 고유성 보장
              src={urlWithId.url}
              className={styles['image-preview']}
              onClick={() => deleteImage(urlWithId.id)}
            />
          ))}
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
