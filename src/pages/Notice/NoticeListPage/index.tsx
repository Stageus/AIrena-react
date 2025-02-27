import NoticeListArea from '#features/Notice/NoticeListArea/ui'
import React from 'react'
import styles from './index.module.scss'

const NoticeListPage: React.FC = () => {
  return (
    <div className={styles['notice-list-container']}>
      <NoticeListArea />
    </div>
  )
}

export default NoticeListPage
