import ErrorPage from '#pages/error/ui/Page'
import ChangeNicknamePage from '#pages/Member/ChangeNicknamePage'
import ChangePasswordPage from '#pages/Member/ChangePasswordPage'
import FindIdPage from '#pages/Member/FindIdPage'
import FindPasswordEmailVerificationGuidePage from '#pages/Member/FindPasswordEmailVerificationGuidePage'
import FindPasswordPage from '#pages/Member/FindPasswordPage'
import LoginPage from '#pages/Member/LoginPage'
import SignupEmailVerificationGuidePage from '#pages/Member/SignupEmailVerificationGuidePage'
import SignupPage from '#pages/Member/SignupPage'
import MockDetailPage from '#pages/Mock/MockDetailPage'
import MockListPage from '#pages/Mock/MockListPage'
import MockQuizResultPage from '#pages/Mock/MockQuizResultPage'
import MockResultPage from '#pages/Mock/MockResultPage'
import MockSolvePage from '#pages/Mock/MockSolvePage'
import MockWritePage from '#pages/Mock/MockWritePage'
import NoticeDetailPage from '#pages/Notice/NoticeDetailPage'
import NoticeListPage from '#pages/Notice/NoticeListPage'
import NoticeWritePage from '#pages/Notice/NoticeWritePage'
import TotalRankPage from '#pages/Rank/TotalRankPage'
import ChangePasswordRedirectPage from '#pages/Redirection/ChangePasswordRedirectPage'
import LoginRedirectPage from '#pages/Redirection/LoginRedirectPage'
import SignupRedirectPage from '#pages/Redirection/SignupRedirectPage'
import {
  default as SignupVerifyPage,
  default as SignupVerifyRedirectPage,
} from '#pages/Redirection/SignupVerifyRedirectPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      <Route path="/signup/verify" element={<SignupVerifyPage />} />

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
        {/* 에러 페이지 */}
        <Route path="*" element={<ErrorPage />} />
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
