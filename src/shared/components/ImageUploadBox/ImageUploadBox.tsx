import { ReactComponent as UploadIcon } from '#assets/icons/upload_icon.svg'
import styles from './ImageUploadBox.module.css'

const ImageUploadBox: React.FC = ({}) => {
  return (
    <div className={styles['image-upload-box']}>
      <div className={styles['image-sumbit-content']}>
        <div className={styles['image-upload-button']}>
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

export default ImageUploadBox
