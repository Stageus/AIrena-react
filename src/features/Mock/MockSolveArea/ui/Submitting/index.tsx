import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface LoadingProps {
  isSubmitting: boolean
}

const Submitting: React.FC<LoadingProps> = ({ isSubmitting }) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isSubmitting) {
      let seconds = 0
      if (timerRef.current) clearInterval(timerRef.current)

      timerRef.current = setInterval(() => {
        seconds++
        setElapsedTime(seconds)
      }, 1000)
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      setElapsedTime(0)
    }
  }, [isSubmitting])

  return (
    <div
      className={styles['loading-container']}
      style={{ display: isSubmitting ? 'flex' : 'none' }}
    >
      <div className={styles['loading-area']}>
        <div className={styles['spinner']}></div>
        <div className={styles['text']}>문제를 채점하고 있습니다...</div>
        <div className={styles['timer']}>{elapsedTime}초 경과</div>
      </div>
    </div>
  )
}

export default Submitting
