import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

interface LoadingProps {
  isSubmitting: boolean
}

const Submitting: React.FC<LoadingProps> = ({ isSubmitting }) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isSubmitting) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
      setElapsedTime(0)
    }
  }, [isSubmitting])

  if (!isSubmitting) {
    return null
  }

  return (
    <div className={styles['loading-container']}>
      <div className={styles['loading-area']}>
        <div className={styles['spinner']}></div>
        <div className={styles['text']}>문제를 채점하고 있습니다...</div>
        <div className={styles['timer']}>{elapsedTime}초 경과</div>
      </div>
    </div>
  )
}

export default Submitting
