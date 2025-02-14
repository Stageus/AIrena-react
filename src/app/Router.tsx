import ChangeNicknamePage from '#pages/Authentication/ChangeNicknamePage'
import ChangePasswordPage from '#pages/Authentication/ChangePasswordPage'
import EmailVerificationGuidePage from '#pages/Authentication/EmailVerificationGuidePage'
import FindIdPage from '#pages/Authentication/FindIdPage'
import FindPasswordPage from '#pages/Authentication/FindPasswordPage'
import LoginPage from '#pages/Authentication/LoginPage'
import LoginRedirectPage from '#pages/Authentication/LoginRedirectPage'
import SignupPage from '#pages/Authentication/SignupPage'
import SignupVerifyPage from '#pages/Authentication/SignupVerifyPage'
import ErrorPage from '#pages/Error'
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
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import IntroductionLayout from 'src/layout/IntroductionLayout'
import MainHeaderLayout from 'src/layout/MainHeaderLayout'

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
        element={<EmailVerificationGuidePage />}
      />
      <Route
        path="/find/password/email-verification-guide"
        element={<EmailVerificationGuidePage />}
      />
      <Route path="/signup/verify" element={<SignupVerifyPage />} />
      <Route path="/login/redirect" element={<LoginRedirectPage />} />
      <Route path="/signup/redirect" element={<LoginPage />} />
      <Route element={<MainHeaderLayout />}>
        {/* 모의고사 페이지 */}
        <Route path="/mock/list" element={<MockListPage />} />
        <Route path="/mock/:idx" element={<MockDetailPage />} />
        <Route path="/mock/write" element={<MockWritePage />} />
        <Route path="/mock/solve/:idx" element={<MockSolvePage />} />
        <Route path="/mock/grading/:idx" element={<MockQuizResultPage />} />
        <Route path="/mock/result/:idx" element={<MockResultPage />} />

        {/* 공지사항 페이지 */}
        <Route path="/notice" element={<NoticeListPage />} />
        <Route path="/notice/write" element={<NoticeWritePage />} />
        <Route path="/notice/:id" element={<NoticeDetailPage />} />

        {/* 전체 랭킹 페이지 */}
        <Route path="/rank/total" element={<TotalRankPage />} />
        {/* 에러 페이지 */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
)

export default AppRouter
