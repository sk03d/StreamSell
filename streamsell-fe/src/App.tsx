import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserTypeSelection from './pages/UserTypeSelection';
import LoginSuccess from './pages/LoginSuccess';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/common/PrivateRoute';
import UserDashboard from './pages/UserDashboard';
import OrgDashboard from './pages/OrgDashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/select-type" element={<Layout><UserTypeSelection /></Layout>} />

          {/* Auth Routes */}
          <Route path="/login/user" element={<Layout><Login /></Layout>} />
          <Route path="/login/org" element={<Layout><Login /></Layout>} />
          <Route path="/register/user" element={<Layout><Signup /></Layout>} />
          <Route path="/register/org" element={<Layout><Signup /></Layout>} />

          {/* Protected Routes */}
          <Route
            path="/dashboard/user"
            element={
              <PrivateRoute>
                <Layout>
                  <UserDashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/org"
            element={
              <PrivateRoute>
                <Layout>
                  <OrgDashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/login-success"
            element={
              <PrivateRoute>
                <Layout>
                  <LoginSuccess />
                </Layout>
              </PrivateRoute>
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
