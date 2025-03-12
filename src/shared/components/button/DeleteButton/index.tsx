import { ReactComponent as DeleteIcon } from '#assets/icons/delete_icon.svg'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { requestDeleteArticle } from './api'
import styles from './index.module.scss'

const DeleteButton: React.FC = () => {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()
  const pathParts = pathname.split('/').filter(Boolean)
  const category = pathParts[0]
  const idx = pathParts[1]

  if (!category || !idx) {
    return null
  }

  const handleDelete = () => {
    const requestDelete = async () => {
      const isConfirmed = window.confirm('삭제하시겠습니까?')
      if (!isConfirmed) {
        return
      }
      await requestDeleteArticle(category, idx)
      navigate(`/${category}/list`)
    }
    requestDelete()
  }

  return (
    <div className={styles['delete-button']} onClick={handleDelete}>
      <DeleteIcon className={styles['delete-icon']} />
      <div className={styles['text']}>삭제</div>
    </div>
  )
}

export default DeleteButton
