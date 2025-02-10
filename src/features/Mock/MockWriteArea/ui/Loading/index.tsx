import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface LoadingProps {
  isLoading: boolean
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isLoading) {
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
  }, [isLoading])

  return (
    <div
      className={styles['loading-container']}
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      <div className={styles['loading-area']}>
        <div className={styles['spinner']}></div>
        <div className={styles['text']}>퀴즈를 생성하고 있습니다...</div>
        <div className={styles['timer']}>{elapsedTime}초 경과</div>
      </div>
    </div>
  )
}

export default Loading
