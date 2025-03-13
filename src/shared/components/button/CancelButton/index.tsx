import { ReactComponent as CancelIcon } from '#assets/icons/cancel_icon.svg'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

interface CancelButtonProps {
  setEditMode: (editMode: boolean) => void
}

const CancelButton: React.FC<CancelButtonProps> = ({ setEditMode }) => {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()
  const pathParts = pathname.split('/').filter(Boolean)
  const category = pathParts[0]
  const idx = pathParts[1]

  if (!category || !idx) {
    return null
  }

  const handleCancel = () => {
    if (window.confirm('취소하시겠습니까?')) {
      setEditMode(false)
      navigate(`/${category}/${idx}`)
    }
  }

  return (
    <div className={styles['cancel-button']} onClick={handleCancel}>
      <CancelIcon className={styles['cancel-icon']} />
      <div className={styles['text']}>취소</div>
    </div>
  )
}

export default CancelButton
