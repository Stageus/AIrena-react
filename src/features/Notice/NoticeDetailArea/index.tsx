import ArticleCreationBasicInfoArea from '#shared/components/article/ArticleCreationBasicInfoArea'
import ArticleManagementArea from '#shared/components/article/ArticleManagementArea'
import styles from './index.module.scss'

const NoticeDetailArea: React.FC = () => {
  return (
    <div className={styles['notice-detail-area']}>
      <div className={styles['notice-detail-content']}>
        <div className={styles['title-output-box']}>
          <div className={styles['text-title']}>
            2024년 서비스 업데이트 안내
          </div>
          <ArticleCreationBasicInfoArea nickname="관리자" date="2024-09-30" />
        </div>
        <div className={styles['content-output-box']}>
          <div className={styles['text']}>
            안녕하세요. 서비스 이용자 여러분,
          </div>
          <div className={styles['text-1']}>
            2024년을 맞이하여 주요 서비스 업데이트 내용을 안내드립니다.
          </div>
          <div className={styles['text-2']}>
            자세한 업데이트 내용은 공지사항을 참고해 주시기 바랍니다.
          </div>
          <div className={styles['text-3']}>감사합니다.</div>
        </div>
        <div className={styles['frame-image-output-box']}>
          <div className={styles['img']}></div>
          <div className={styles['img-1']}></div>
          <div className={styles['img-2']}></div>
          <div className={styles['img-3']}></div>
        </div>
      </div>
      <ArticleManagementArea />
    </div>
  )
}
export default NoticeDetailArea
