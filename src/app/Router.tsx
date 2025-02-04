import FindIdPage from '#pages/FindIdPage/FindIdPage'
import LoginPage from '#pages/LoginPage/LoginPage'
import LoginRedirectPage from '#pages/LoginRedirectPage/LoginRedirectPage'
import SignupPage from '#pages/SignupPage/SignupPage'
import WithIntroductionSectionLayout from '#shared/components/WithIntroductionSectionLayout/WithIntroductionSectionLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route element={<WithIntroductionSectionLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find/id" element={<FindIdPage />} />
      </Route>
      <Route path="/login/redirect" element={<LoginRedirectPage />} />
    </Routes>
  </Router>
)

export default AppRouter
