import { UploadIcon } from '#shared/icons'
import { useRef } from 'react'
import styles from './SubmitImageButton.module.scss'

interface SubmitImageButtonProps {
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SubmitImageButton: React.FC<SubmitImageButtonProps> = ({
  handleFile,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }
  return (
    <div onClick={handleDivClick} className={styles['image-upload-button']}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFile}
        multiple
      />
      <UploadIcon className={styles['upload-icon']} />
      <div className={styles['text']}>이미지 선택</div>
    </div>
  )
}
