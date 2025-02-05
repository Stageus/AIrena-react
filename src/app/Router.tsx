import ChangeNicknamePage from '#pages/Authentication/ChangeNicknamePage/ChangeNicknamePage'
import ChangePasswordPage from '#pages/Authentication/ChangePasswordPage/ChangePasswordPage'
import EmailVerifiactionGuidePage from '#pages/Authentication/EmailVerifiactionGuidePage/EmailVerifiactionGuidePage'
import FindIdPage from '#pages/Authentication/FindIdPage/FindIdPage'
import FindPasswordPage from '#pages/Authentication/FindPasswordPage/FindPasswordPage'
import LoginPage from '#pages/Authentication/LoginPage/LoginPage'
import LoginRedirectPage from '#pages/Authentication/LoginRedirectPage/LoginRedirectPage'
import SignupPage from '#pages/Authentication/SignupPage/SignupPage'
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
          <Route path="/change/password" element={<ChangePasswordPage />} />
          <Route path="/change/nickname" element={<ChangeNicknamePage />} />
        </Route>
        <Route
          path="/email-verification-guide"
          element={<EmailVerifiactionGuidePage />}
        />
        <Route path="/login/redirect" element={<LoginRedirectPage />} />
      </Route>
    </Routes>
  </Router>
)

export default AppRouter
