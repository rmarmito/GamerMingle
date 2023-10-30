import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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

function App() {
  return (
    <div className="app-container">
      {
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
                  <SupportPage /> <Footer />
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
                <Layout>
                  <ActivityPage />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout>
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
