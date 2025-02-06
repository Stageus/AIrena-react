import ChangeNicknamePage from '#pages/Authentication/ChangeNicknamePage'
import ChangePasswordPage from '#pages/Authentication/ChangePasswordPage'
import EmailVerificationGuidePage from '#pages/Authentication/EmailVerifiactionGuidePage'
import FindIdPage from '#pages/Authentication/FindIdPage'
import FindPasswordPage from '#pages/Authentication/FindPasswordPage'
import LoginPage from '#pages/Authentication/LoginPage'
import LoginRedirectPage from '#pages/Authentication/LoginRedirectPage'
import SignupPage from '#pages/Authentication/SignupPage'
import MocktestDetailPage from '#pages/Mocktest/MocktestDetailPage'
import MocktestListPage from '#pages/Mocktest/MocktestListPage'
import MocktestSolvePage from '#pages/Mocktest/MocktestSolvePage'
import MocktestWritePage from '#pages/Mocktest/MocktestWritePage'
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
          element={<EmailVerificationGuidePage />}
        />
        <Route path="/login/redirect" element={<LoginRedirectPage />} />
      </Route>
      <Route element={<VertialRootPage />}>
        <Route element={<WithMainHeaderLayout />}>
          {/* 모의고사 페이지 */}
          <Route path="/mocktest" element={<MocktestListPage />} />
          <Route path="/mocktest/:id" element={<MocktestDetailPage />} />
          <Route path="/mocktest/write" element={<MocktestWritePage />} />
          <Route path="/mocktest/:id/solve" element={<MocktestSolvePage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
)

export default AppRouter
