import React from 'react'
import styles from './IntroductionSection.module.css'

const IntroductionSection: React.FC = () => {
  return (
    <div className={styles['component--']}>
      <div className={styles['frame---']}>
        <img
          src="https://image-resource.creatie.ai/150880125742532/150880125742534/15d39dac9d72b571162790614bff07ce.png"
          className={styles['image-5']}
        />
        <div className={styles['airena']}>AIrena</div>
        <div className={styles['ai-----']}>
          <div>
            <span>
              AI로 문제를 만들고
              <br></br>
              친구들과 순위를 겨뤄보세요
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroductionSection
