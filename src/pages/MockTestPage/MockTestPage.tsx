import './MockTestPage.css'
import TitleHeader from '#shared/components/TitleHeader/TitleHeader'

const MockTestPage = () => {
  const title = '모의고사'
  return (
    <div className="board-container">
      <TitleHeader title={title}></TitleHeader>
    </div>
  )
}

export default MockTestPage
