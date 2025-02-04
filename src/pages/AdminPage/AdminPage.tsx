import './AdminPage.css'
import TitleHeader from '#shared/components/TitleHeader/TitleHeader'

const NoticePage = () => {
  const title = '관리자'
  return (
    <div className="board-container">
      <TitleHeader title={title}></TitleHeader>
    </div>
  )
}

export default NoticePage
