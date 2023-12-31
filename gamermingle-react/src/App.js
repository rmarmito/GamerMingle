import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { AuthRoute } from "./components/AuthRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./components/styles/webStyles.css";

import Footer from "./components/Footer";
import Layout from "./PageLayout";
import SplashPage from "./components/SplashPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import LearnPage from "./components/LearnPage";
import SupportPage from "./components/SupportPage";
import SafetyPage from "./components/SafetyPage";
import ActivityPage from "./components/ActivityPage";
import ProfileEditPage from "./components/ProfileEditPage";
import ReportPage from "./components/SupportReportPage";
import ContactPage from "./components/SupportContactPage";
import FeedbackPage from "./components/SupportFeedbackPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <SplashPage />
                </Layout>
              }
            />
            <Route
              path="/signup"
              element={
                <Layout>
                  <SignupPage />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <LoginPage />
                </Layout>
              }
            />
            <Route
              path="/learn"
              element={
                <Layout>
                  <LearnPage />
                </Layout>
              }
            />
            <Route
              path="/support"
              element={
                <>
                  <SupportPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/report"
              element={
                <>
                  <ReportPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <ContactPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/feedback"
              element={
                <>
                  <FeedbackPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/safety"
              element={
                <Layout>
                  <SafetyPage />
                </Layout>
              }
            />
            <Route
              path="/activity"
              element={
                <AuthRoute>
                  <Layout>
                    <ActivityPage />
                  </Layout>
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <Layout>
                    <ProfileEditPage />
                  </Layout>
                </AuthRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />{" "}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
