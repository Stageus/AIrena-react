import AdminPage from '#pages/AdminPage/AdminPage'
import LoginPage from '#pages/LoginPage/LoginPage'
import LoginRedirectPage from '#pages/LoginRedirectPage/LoginRedirectPage'
import MockTestPage from '#pages/MockTestPage/MockTestPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login/redirect" element={<LoginRedirectPage />} />
      <Route path="/mocktest" element={<MockTestPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>
)

export default AppRouter
