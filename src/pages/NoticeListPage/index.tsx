import React from 'react'
import NoticeListArea from 'src/widgets/notice/NoticeListArea/ui'
import styles from './index.module.scss'

const NoticeListPage: React.FC = () => {
  return (
    <div className={styles['notice-list-container']}>
      <NoticeListArea />
    </div>
  )
}

export default NoticeListPage
