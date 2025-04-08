import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoginSuccess from './pages/LoginSuccess';
import ARVRTravel from './pages/ARVRTravel';
import BlockchainPackages from './pages/BlockchainPackages';
import LocationDeals from './pages/LocationDeals';
import InteractiveStreams from './pages/InteractiveStreams';
import RealTimeChat from './pages/RealTimeChat';
import VirtualTours from './pages/VirtualTours';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
<<<<<<< HEAD
        <ScrollToTop />
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login-success" element={<LoginSuccess />} />
              <Route path="/ar-vr-travel" element={<ARVRTravel />} />
              <Route path="/blockchain-packages" element={<BlockchainPackages />} />
              <Route path="/location-deals" element={<LocationDeals />} />
              <Route path="/interactive-streams" element={<InteractiveStreams />} />
              <Route path="/real-time-chat" element={<RealTimeChat />} />
              <Route path="/virtual-tours" element={<VirtualTours />} />
            </Routes>
          </Layout>
        </div>
=======
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login-success" element={<LoginSuccess />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Layout>
>>>>>>> feature/login-signup
      </Router>
    </AuthProvider>
  );
}

export default App;
