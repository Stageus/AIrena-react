import ChangeNicknamePage from '#pages/Authentication/ChangeNicknamePage'
import ChangePasswordPage from '#pages/Authentication/ChangePasswordPage'
import EmailVerificationGuidePage from '#pages/Authentication/EmailVerificationGuidePage'
import FindIdPage from '#pages/Authentication/FindIdPage'
import FindPasswordPage from '#pages/Authentication/FindPasswordPage'
import LoginPage from '#pages/Authentication/LoginPage'
import LoginRedirectPage from '#pages/Authentication/LoginRedirectPage'
import SignupPage from '#pages/Authentication/SignupPage'
import MockDetailPage from '#pages/mock/MockDetailPage'
import MockListPage from '#pages/mock/MockListPage'
import MockSolvePage from '#pages/mock/MockSolvePage'
import MockWritePage from '#pages/mock/MockWritePage'
import HorizontalRootPage from '#shared/components/RootPage/HorizontalRootPage/HorizontalRootPage'
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
          element={<EmailVerificationGuidePage />}
        />
        <Route path="/login/redirect" element={<LoginRedirectPage />} />
      </Route>
      <Route element={<VerticalRootPage />}>
        <Route element={<WithMainHeaderLayout />}>
          {/* 모의고사 페이지 */}
          <Route path="/mock" element={<MockListPage />} />
          <Route path="/mock/:id" element={<MockDetailPage />} />
          <Route path="/mock/write" element={<MockWritePage />} />
          <Route path="/mock/:id/solve" element={<MockSolvePage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
)

export default AppRouter
