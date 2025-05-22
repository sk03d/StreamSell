import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const LoginSuccess = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        setError('No user data found. Please log in again.');
        setTimeout(() => navigate('/select-type'), 2000);
        return;
      }

      const timer = setTimeout(() => {
        try {
          if (user.userType === 'user') {
            navigate('/dashboard/user');
          } else if (user.userType === 'organization') {
            navigate('/dashboard/org');
          } else {
            setError('Invalid user type. Please log in again.');
            setTimeout(() => navigate('/select-type'), 2000);
          }
        } catch (err) {
          console.error('Navigation error:', err);
          setError('An error occurred. Please try again.');
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [navigate, user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {error ? (
          <>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-500/20 flex items-center justify-center"
            >
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h1 className="text-4xl font-bold text-white mb-4">Error</h1>
            <p className="text-xl text-red-400 mb-8">{error}</p>
          </>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h1 className="text-4xl font-bold text-white mb-4">Login Successful!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Welcome back, {user?.username}!
            </p>
            <p className="text-gray-400">
              Redirecting to {user?.userType === 'user' ? 'user' : 'organization'} dashboard in 1 second...
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default LoginSuccess; 