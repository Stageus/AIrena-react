import ChangeNicknamePage from '#pages/Authentication/ChangeNicknamePage/ChangeNicknamePage'
import ChangePasswordPage from '#pages/Authentication/ChangePasswordPage/ChangePasswordPage'
import EmailVerifiactionGuidePage from '#pages/Authentication/EmailVerifiactionGuidePage/EmailVerifiactionGuidePage'
import FindIdPage from '#pages/Authentication/FindIdPage/FindIdPage'
import FindPasswordPage from '#pages/Authentication/FindPasswordPage/FindPasswordPage'
import LoginPage from '#pages/Authentication/LoginPage/LoginPage'
import LoginRedirectPage from '#pages/Authentication/LoginRedirectPage/LoginRedirectPage'
import SignupPage from '#pages/Authentication/SignupPage/SignupPage'
import MockTestListPage from '#pages/MockTest/MockTestListPage/MockTestListPage'
import HorizontalRootPage from '#shared/components/RootPage/HorizontalRootPage/HorizontalRootPage'
import VertialRootPage from '#shared/components/RootPage/VerticalRootPage/VerticalRootPage'
import WithIntroductionSectionLayout from '#shared/components/WithIntroductionSectionLayout/WithIntroductionSectionLayout'
import WithMainHeaderLayout from '#shared/components/WithMainHeaderLayout/WithMainHeaderLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <Routes>
      {/* 인증 페이지 */}
      <Route element={<HorizontalRootPage />}>
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
      <Route element={<VertialRootPage />}>
        {/* 모의고사 페이지 */}
        <Route element={<WithMainHeaderLayout />}>
          <Route path="/mocktest" element={<MockTestListPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
)

export default AppRouter
