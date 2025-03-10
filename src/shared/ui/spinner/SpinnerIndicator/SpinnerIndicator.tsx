import { useEffect, useRef, useState } from 'react'
import styles from './SpinnerIndicator.module.scss'

interface SpinnerIndicatorProps {
  content: string
  isSubmitting: boolean
}

export const SpinnerIndicator: React.FC<SpinnerIndicatorProps> = ({
  content,
  isSubmitting,
}) => {
  const [dots, setDots] = useState('.')
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isSubmitting) {
      intervalRef.current = setInterval(() => {
        setDots((prev) => (prev === '...' ? '.' : prev + '.'))
      }, 500)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isSubmitting])

  return (
    <div className={styles['spinner']}>
      {content}
      {dots}
    </div>
  )
}
