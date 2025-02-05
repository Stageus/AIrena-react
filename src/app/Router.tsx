import FindIdPage from '#pages/FindIdPage/FindIdPage'
import FindPasswordPage from '#pages/FindPasswordPage/FindPasswordPage'
import LoginPage from '#pages/LoginPage/LoginPage'
import LoginRedirectPage from '#pages/LoginRedirectPage/LoginRedirectPage'
import SignupPage from '#pages/SignupPage/SignupPage'
import RootPage from '#shared/components/RootPage/RootPage'
import WithIntroductionSectionLayout from '#shared/components/WithIntroductionSectionLayout/WithIntroductionSectionLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route element={<RootPage />}>
        <Route element={<WithIntroductionSectionLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/find/id" element={<FindIdPage />} />
          <Route path="/find/password" element={<FindPasswordPage />} />
        </Route>
        <Route path="/login/redirect" element={<LoginRedirectPage />} />
      </Route>
    </Routes>
  </Router>
)

export default AppRouter
