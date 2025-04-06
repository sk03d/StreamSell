import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import backimage from './back.jpeg';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/'); // Redirect to home page after successful login
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${backimage})` }}
        ></div>
        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--neon-primary))]/10 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-[hsl(var(--neon-primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to your account to continue</p>
          </div>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm"
            >
              {error}
            </motion.div>
          )}
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[hsl(var(--neon-primary))] focus:ring-1 focus:ring-[hsl(var(--neon-primary))] transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[hsl(var(--neon-primary))] focus:ring-1 focus:ring-[hsl(var(--neon-primary))] transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[hsl(var(--neon-primary))] border-gray-600 rounded focus:ring-[hsl(var(--neon-primary))]"
                />
                <label className="ml-2 block text-sm text-gray-300">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-[hsl(var(--neon-primary))] hover:text-[hsl(var(--neon-secondary))] transition-colors duration-300">
                Forgot password?
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[hsl(var(--neon-primary))] text-black font-bold py-3 px-4 rounded-lg hover:bg-[hsl(var(--neon-secondary))] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--neon-primary))]"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </motion.div>
          </form>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[hsl(var(--neon-primary))] hover:text-[hsl(var(--neon-secondary))] transition-colors duration-300">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login; 