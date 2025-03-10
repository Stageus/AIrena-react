import {
  ChangeNicknamePage,
  ChangePasswordPage,
  ChangePasswordRedirectPage,
  Error404Page,
  FindIdPage,
  FindPasswordEmailVerificationGuidePage,
  FindPasswordPage,
  LoginPage,
  LoginRedirectPage,
  SignupEmailVerificationGuidePage,
  SignupPage,
  SignupRedirectPage,
  SignupVerifyRedirectPage,
} from '#pages/member'

import {
  MockDetailPage,
  MockListPage,
  MockQuizResultPage,
  MockResultPage,
  MockSolvePage,
  MockWritePage,
} from '#pages/mock'

import {
  NoticeDetailPage,
  NoticeListPage,
  NoticeWritePage,
} from '#pages/notice'

import { RankPage } from '#pages/rank'

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
        <Route path="/rank/total" element={<RankPage />} />
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
