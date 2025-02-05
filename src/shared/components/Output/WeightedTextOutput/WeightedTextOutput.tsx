import React from 'react'
import styles from './WeightedTextOutput.module.css'

interface WegihtedeTextOutputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const WegihtedeTextOutput: React.FC<WegihtedeTextOutputProps> = ({ text }) => {
  return (
    <div className={styles['weighted-text-output-area']}>
      <div className={styles['text']}>{text}</div>
    </div>
  )
}
export default WegihtedeTextOutput
