import SignUp from "@/app/auth/sign-up";
import Maintenance from "@/components/common/maintenance";
import LoadingBar from "@/components/loader/loading-bar";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./auth-route";
import Login from "@/app/auth/login";
import ForgotPassword from "@/components/forgot-password/forgot-password";
import Home from "@/app/home/home";
import ProtectedRoute from "./protected-route";
import NotFound from "@/app/errors/not-found";
import PopupList from "@/app/popup/popup";
import ErrorBoundary from "@/components/error-boundry/error-boundry";
import BannerList from "@/app/banner/banner-list";
import CompanyList from "@/app/company/company-list";
import CountryList from "@/app/country/country";
import LetureYoutubeList from "@/app/lecture-youtube/lecture-youtube-list";
import LectureYoutubeForm from "@/app/lecture-youtube/lecture-youtube-form";
import StudentList from "@/app/student/student-list";
import StudentForm from "@/app/student/student-form";

function AppRoutes() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route path="/" element={<Login />} />
          <Route
            path="/forgot-password"
            element={
              <Suspense fallback={<LoadingBar />}>
                <ForgotPassword />
              </Suspense>
            }
          />
          <Route path="/maintenance" element={<Maintenance />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={
              <Suspense fallback={<LoadingBar />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/popup-list"
            element={
              <Suspense fallback={<LoadingBar />}>
                <PopupList />
              </Suspense>
            }
          />
          <Route
            path="/banner-list"
            element={
              <Suspense fallback={<LoadingBar />}>
                <BannerList />
              </Suspense>
            }
          />
          <Route
            path="/company-list"
            element={
              <Suspense fallback={<LoadingBar />}>
                <CompanyList />
              </Suspense>
            }
          />
          <Route
            path="/country-list"
            element={
              <Suspense fallback={<LoadingBar />}>
                <CountryList />
              </Suspense>
            }
          />
          <Route
            path="/lecture-youtube"
            element={
              <Suspense fallback={<LoadingBar />}>
                <LetureYoutubeList />
              </Suspense>
            }
          />
          <Route
            path="/lecture-youtube/create"
            element={
              <Suspense fallback={<LoadingBar />}>
                <LectureYoutubeForm />
              </Suspense>
            }
          />
          <Route
            path="/lecture-youtube/:id/edit"
            element={
              <Suspense fallback={<LoadingBar />}>
                <LectureYoutubeForm />
              </Suspense>
            }
          />
          <Route
            path="/student-list"
            element={
              <Suspense fallback={<LoadingBar />}>
                <StudentList />
              </Suspense>
            }
          />
          <Route
            path="/student/create"
            element={
              <Suspense fallback={<LoadingBar />}>
                <StudentForm />
              </Suspense>
            }
          />
          {/* <Route
            path="/student/:id/edit"
            element={
              <Suspense fallback={<LoadingBar />}>
                <StudentForm />
              </Suspense>
            }
          /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRoutes;
