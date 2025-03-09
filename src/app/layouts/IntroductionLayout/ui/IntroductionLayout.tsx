import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

export const IntroductionLayout: React.FC = () => {
  return (
    <div className={styles['with-introduction-section-layout']}>
      <div className={styles['introduction-section']}>
        <div className={styles['logo-with-text']}>
          <div className={styles['big-logo']}>
            <img
              src="https://image-resource.creatie.ai/150880125742532/150880125742534/15d39dac9d72b571162790614bff07ce.png"
              className={styles['big-logo-1']}
            />
          </div>
          <div className={styles['ai-rena']}>AIrena</div>
          <div className={styles['introduction-text']}>
            <div>
              <span>
                AI로 문제를 만들고<div className={styles['_p']}></div>친구들과
                순위를 겨뤄보세요
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['wide-background']}>
        <Outlet />
      </div>
    </div>
  )
}
