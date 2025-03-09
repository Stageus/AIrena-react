import styles from './ImagePreview.module.scss'

interface ImagePreviewProps {
  previewUrls: string[]
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ previewUrls }) => {
  return (
    <div className={styles['image-preview-content']}>
      {previewUrls.length > 0
        ? previewUrls.map((url, index) => (
            <img key={index} src={url} className={styles['image-preview']} />
          ))
        : null}
    </div>
  )
}
