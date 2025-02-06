import NoticeDetailArea from '#features/Notice/NoticeDetailArea'
import React from 'react'
import styles from './index.module.scss'

const NoticeDetailPage: React.FC = () => {
  return (
    <div className={styles['notice-detail-container']}>
      <NoticeDetailArea />
    </div>
  )
}

export default NoticeDetailPage
