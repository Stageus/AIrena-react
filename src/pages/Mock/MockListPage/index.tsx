import MockListArea from '#features/Mock/MockListArea/ui'
import ArticleFooter from '#shared/components/article/ArticleListFooter'
import React from 'react'
import styles from './index.module.scss'

const MockListPage: React.FC = () => {
  return (
    <div className={styles['mock-list-container']}>
      <MockListArea />
      <ArticleFooter />
    </div>
  )
}
export default MockListPage
