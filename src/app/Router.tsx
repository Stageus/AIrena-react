import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '#pages/HomePage/HomePage'
import NoticePage from '#pages/NoticePage/NoticePage'
import MockTestPage from '#pages/MockTestPage/MockTestPage'
import AdminPage from '#pages/AdminPage/AdminPage'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/mockTest" element={<MockTestPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>
)

export default AppRouter
