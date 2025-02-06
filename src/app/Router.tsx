import ChangeNicknamePage from '#pages/Authentication/ChangeNicknamePage'
import ChangePasswordPage from '#pages/Authentication/ChangePasswordPage'
import EmailVerificationGuidePage from '#pages/Authentication/EmailVerificationGuidePage'
import FindIdPage from '#pages/Authentication/FindIdPage'
import FindPasswordPage from '#pages/Authentication/FindPasswordPage'
import LoginPage from '#pages/Authentication/LoginPage'
import LoginRedirectPage from '#pages/Authentication/LoginRedirectPage'
import SignupPage from '#pages/Authentication/SignupPage'
import MockDetailPage from '#pages/Mock/MockDetailPage'
import MockListPage from '#pages/Mock/MockListPage'
import MockResultPage from '#pages/Mock/MockResultPage'
import MockSolvePage from '#pages/Mock/MockSolvePage'
import MockSubmitAnswerGradingPage from '#pages/Mock/MockSubmitAnswerGradingPage'
import MockWritePage from '#pages/Mock/MockWritePage'
import WithIntroductionSectionLayout from '#shared/components/layout/WithIntroductionSectionLayout'
import WithMainHeaderLayout from '#shared/components/layout/WithMainHeaderLayout'
import HorizontalRootPage from '#shared/components/rootPage/HorizontalRootPage'
import VerticalRootPage from '#shared/components/rootPage/VerticalRootPage'
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
          <Route
            path="/mock/:id/grading"
            element={<MockSubmitAnswerGradingPage />}
          />
          <Route path="/mock/:id/result" element={<MockResultPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
)

export default AppRouter
