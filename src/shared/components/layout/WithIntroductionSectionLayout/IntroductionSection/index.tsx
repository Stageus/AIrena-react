import React from 'react'
import styles from './index.module.scss'

const IntroductionSection: React.FC = () => {
  return (
    <div className={styles['introduction-section']}>
      <div className={styles['logo-with-text']}>
        <div className={styles['big-logo']}>
          <img
            src="https://image-resource.creatie.ai/150880125742532/150880125742534/15d39dac9d72b571162790614bff07ce.png"
            className={styles['big-logo-1']}
          />
        </div>
        <div className={styles['airena']}>AIrena</div>
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
  )
}
export default IntroductionSection
