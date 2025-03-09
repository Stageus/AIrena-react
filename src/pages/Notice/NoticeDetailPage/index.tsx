import React from 'react'
import NoticeDetailArea from 'src/widgets/notice/NoticeDetailArea/ui'
import styles from './index.module.scss'

const NoticeDetailPage: React.FC = () => {
  return (
    <div className={styles['notice-detail-container']}>
      <NoticeDetailArea />
    </div>
  )
}

export default NoticeDetailPage
