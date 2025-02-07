import { ReactComponent as UploadIcon } from '#assets/icons/upload_icon.svg'
import { useRef } from 'react'
import styles from './index.module.scss'

const ImageUploader: React.FC = ({}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      console.log('선택된 파일:', files[0])
      // 파일 처리 로직
    }
  }

  const ImageInput = (
    <input
      type="file"
      accept="image/*"
      ref={inputRef}
      style={{ display: 'none' }}
      onChange={onFileChange}
    />
  )

  return (
    <div className={styles['image-uploader']}>
      <div className={styles['image-preview']}>
        <div className={styles['small-logo']}>
          <img
            src="https://image-resource.creatie.ai/150880125742532/150880125742534/15d39dac9d72b571162790614bff07ce.png"
            className={styles['small-logo-1']}
          />
        </div>
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
