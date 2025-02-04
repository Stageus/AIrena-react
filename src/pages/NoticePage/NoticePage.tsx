import './NoticePage.css'
import TitleHeader from '#shared/components/TitleHeader/TitleHeader'

const NoticePage = () => {
  const title = '공지사항'
  return (
    <div className="board-container">
      <TitleHeader title={title}></TitleHeader>
    </div>
  )
}

export default NoticePage
