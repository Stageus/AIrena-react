import { ImageUploader } from '#widgets/global/ImageUploader/ui/ImageUploader'
import { TextEditor } from '#widgets/global/TextEditor'
import styles from './BasicWriteArea.module.scss'

interface BasicWriteAreaProps {
  setTitle: (title: string) => void
  setContent: (content: string) => void
  setFiles: (files: File[]) => void
  fileLimit: number
}
export const BasicWriteArea: React.FC<BasicWriteAreaProps> = ({
  setTitle,
  setContent,
  setFiles,
  fileLimit,
}) => {
  return (
    <>
      <div className={styles['title-input-area']}>
        <div className={styles['text-4']}>제목</div>
        <div className={styles['title-input-box']}>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            placeholder="제목을 입력해주세요"
            className={styles['title-input']}
          />
        </div>
      </div>
      <div className={styles['content-input-area']}>
        <div className={styles['text-5']}>내용</div>
        <TextEditor setContent={setContent} />
      </div>
      <div className={styles['image-submit-area']}>
        <div className={styles['text-6']}>이미지 등록(최대 {fileLimit}개)</div>
        <ImageUploader setFiles={setFiles} />
      </div>
    </>
  )
}
