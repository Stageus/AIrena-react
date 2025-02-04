import LoginPage from '#pages/LoginPage/LoginPage'
import LoginRedirectPage from '#pages/LoginRedirectPage/LoginRedirectPage'
import WithIntroductionSectionLayout from '#shared/components/WithIntroductionSectionLayout/WithIntroductionSectionLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route element={<WithIntroductionSectionLayout />}>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Route>
      <Route path="/login/redirect" element={<LoginRedirectPage />} />
    </Routes>
  </Router>
)

export default AppRouter
