import React from 'react'
import styles from './WeightedText.module.scss'

interface WeightedTextProps {
  text: string
}

export const WeightedText: React.FC<WeightedTextProps> = ({ text }) => {
  return <div className={styles['weighted-text']}>{text}</div>
}
