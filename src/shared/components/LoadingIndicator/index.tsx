import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

interface LoadingIndicatorProps {
  message: string
  submitting: boolean
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  message,
  submitting,
}) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (submitting) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
      setElapsedTime(0)
    }
  }, [submitting])

  if (!submitting) {
    return null
  }

  return (
    <div className={styles['loading-container']}>
      <div className={styles['loading-area']}>
        <div className={styles['spinner']}></div>
        <div className={styles['text']}>{message}</div>
        <div className={styles['timer']}>{elapsedTime}초 경과</div>
      </div>
    </div>
  )
}
