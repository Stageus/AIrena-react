import NoticeListArea from '#features/Mock/Notice/NoticeListArea/ui'
import ArticleFooter from '#shared/components/article/ArticleFooter'
import React from 'react'
import styles from './index.module.scss'

const NoticeListPage: React.FC = () => {
  return (
    <div className={styles['notice-list-container']}>
      <NoticeListArea />
      <ArticleFooter />
    </div>
  )
}

export default NoticeListPage
