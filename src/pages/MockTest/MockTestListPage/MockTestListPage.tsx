import MockTestListArea from '#features/Mocktest/ui/MocktestListArea/MocktestListArea'
import ArticleFooter from '#shared/components/Footer/ArticleFooter/ArticleFooter'
import React from 'react'
import styles from './MockTestListPage.module.css'

const MocktestListPage: React.FC = () => {
  return (
    <div className={styles['mocktest-list-container']}>
      <MockTestListArea />
      <ArticleFooter />
    </div>
  )
}
export default MocktestListPage
