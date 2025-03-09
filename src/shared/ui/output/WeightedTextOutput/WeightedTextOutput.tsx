import React from 'react'
import styles from './WeightedTextOutput.module.scss'

interface WeightedTextOutputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const WeightedTextOutput: React.FC<WeightedTextOutputProps> = ({ text }) => {
  return (
    <div className={styles['weighted-text-output-area']}>
      <div className={styles['text']}>{text}</div>
    </div>
  )
}
export default WeightedTextOutput
