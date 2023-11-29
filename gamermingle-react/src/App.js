import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // assume logged in
  const login = () => {
    setIsAuthenticated(true);
  };
  return (
    <div className="app-container">
      {
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/activity" />
                ) : (
                  <Layout isAuthenticated={isAuthenticated}>
                    <SplashPage />
                  </Layout>
                )
              }
            />
            <Route
              path="/signup"
              element={
                <Layout isAuthenticated={isAuthenticated}>
                  <SignupPage />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout isAuthenticated={isAuthenticated}>
                  <LoginPage />
                </Layout>
              }
            />
            <Route
              path="/learn"
              element={
                <Layout isAuthenticated={isAuthenticated}>
                  <LearnPage />
                </Layout>
              }
            />
            <Route
              path="/support"
              element={
                <>
                  <SupportPage /> <Footer />
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
              path="/safety"
              element={
                <Layout isAuthenticated={isAuthenticated}>
                  <SafetyPage />
                </Layout>
              }
            />
            <Route
              path="/activity"
              element={
                <Layout isAuthenticated={isAuthenticated}>
                  <ActivityPage />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout isAuthenticated={isAuthenticated}>
                  <ProfileEditPage />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
