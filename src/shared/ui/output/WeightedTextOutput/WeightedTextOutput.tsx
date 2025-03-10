import React from 'react'
import styles from './WeightedTextOutput.module.scss'

interface WeightedTextOutputProps {
  text: string
}

export const WeightedTextOutput: React.FC<WeightedTextOutputProps> = ({
  text,
}) => {
  return <div className={styles['weighted-text']}>{text}</div>
}
