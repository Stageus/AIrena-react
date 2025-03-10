import { ChangeNicknamePage } from '#pages/ChangeNicknamePage'
import { ChangePasswordPage } from '#pages/ChangePasswordPage'
import ChangePasswordRedirectPage from '#pages/ChangePasswordRedirectPage'
import Error404Page from '#pages/Error404Page'
import { FindIdPage } from '#pages/FindIdPage'
import FindPasswordEmailVerificationGuidePage from '#pages/FindPasswordEmailVerificationGuidePage'
import FindPasswordPage from '#pages/FindPasswordPage'
import LoginPage from '#pages/LoginPage'
import LoginRedirectPage from '#pages/LoginRedirectPage'
import { MockDetailPage } from '#pages/MockDetailPage'
import MockListPage from '#pages/MockListPage/ui/MockListPage'
import { MockQuizResultPage } from '#pages/MockQuizResultPage'
import { MockResultPage } from '#pages/MockResultPage'
import { MockSolvePage } from '#pages/MockSolvePage'
import MockWritePage from '#pages/MockWritePage/ui/MockWritePage'
import NoticeDetailPage from '#pages/NoticeDetailPage'
import NoticeListPage from '#pages/NoticeListPage'
import NoticeWritePage from '#pages/NoticeWritePage'
import SignupEmailVerificationGuidePage from '#pages/SignupEmailVerificationGuidePage'
import { SignupPage } from '#pages/SignupPage'
import SignupRedirectPage from '#pages/SignupRedirectPage'
import SignupVerifyRedirectPage from '#pages/SignupVerifyRedirectPage'
import TotalRankPage from '#pages/TotalRankPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { IntroductionLayout } from './layouts/IntroductionLayout'
import { MainHeaderLayout } from './layouts/MainHeaderLayout'

const AppRouter = () => (
  <Router>
    <ToastContainer />
    <Routes>
      {/* 인증 페이지 */}
      <Route element={<IntroductionLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find/id" element={<FindIdPage />} />
        <Route path="/find/password" element={<FindPasswordPage />} />
        <Route path="/change/password" element={<ChangePasswordPage />} />
        <Route path="/change/nickname" element={<ChangeNicknamePage />} />
      </Route>
      <Route
        path="/signup/email-verification-guide"
        element={<SignupEmailVerificationGuidePage />}
      />
      <Route
        path="/find/password/email-verification-guide"
        element={<FindPasswordEmailVerificationGuidePage />}
      />
      <Route path="/signup/verify" element={<SignupVerifyRedirectPage />} />

      <Route element={<MainHeaderLayout />}>
        {/* 모의고사 페이지 */}
        <Route path="/mock/list" element={<MockListPage />} />
        <Route path="/mock/:idx" element={<MockDetailPage />} />
        <Route path="/mock/write" element={<MockWritePage />} />
        <Route path="/mock/solve/:idx" element={<MockSolvePage />} />
        <Route path="/mock/grading/:idx" element={<MockQuizResultPage />} />
        <Route path="/mock/result/:idx" element={<MockResultPage />} />

        {/* 공지사항 페이지 */}
        <Route path="/notice/list" element={<NoticeListPage />} />
        <Route path="/notice/write" element={<NoticeWritePage />} />
        <Route path="/notice/:idx" element={<NoticeDetailPage />} />

        {/* 전체 랭킹 페이지 */}
        <Route path="/rank/total" element={<TotalRankPage />} />
        {/* 404 에러 페이지 */}
        <Route path="*" element={<Error404Page />} />
      </Route>

      {/* 리디렉션 페이지 */}
      <Route path="/redirect/login" element={<LoginRedirectPage />} />
      <Route path="/redirect/signup" element={<SignupRedirectPage />} />
      <Route
        path="/redirect/signup/verify"
        element={<SignupVerifyRedirectPage />}
      />
      <Route
        path="/redirect/change/password"
        element={<ChangePasswordRedirectPage />}
      />
    </Routes>
  </Router>
)

export default AppRouter
