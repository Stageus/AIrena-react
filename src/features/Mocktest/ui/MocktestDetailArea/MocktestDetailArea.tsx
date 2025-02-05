import DeleteArticleButton from '#shared/components/Button/DeleteArticleButton/DeleteArticleButton'
import EditArticleButton from '#shared/components/Button/EditArticleButton/EditArticleButton'
import EditArticleCompleteButton from '#shared/components/Button/EditArticleCompleteButton/EditArticleCompleteButton'
import MocktestBasicInfoArea from '../MocktestBasicInfo/MocktestBasicInfoArea'
import MocktestLikeArea from '../MocktestLikeArea/MocktestLikeArea.module'
import styles from './MocktestDetailArea.module.css'

const Root = ({}) => {
  return (
    <div className={styles['mocktest-detail-area']}>
      <div className={styles['title']}>대한민국 퀴즈</div>
      <div className={styles['description']}>대한민국에 관한 퀴즈입니다</div>
      <div className={styles['thumbnail']}></div>
      <MocktestBasicInfoArea />
      <div className={styles['mocktest-edit-delete-area']}>
        <EditArticleButton />
        <EditArticleCompleteButton />
        <DeleteArticleButton />
      </div>
      <MocktestLikeArea />
      <div className={styles['mocktest-solve-button']}>
        <div className={styles['button-content']}>
          <svg id="96:5641" className={styles['solve-icon']}></svg>
          <div className={styles['text']}>모의고사 풀기</div>
        </div>
      </div>
    </div>
  )
}
export default Root
