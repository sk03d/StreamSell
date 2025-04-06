import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import backimage from './back.jpeg';

const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(username, email, password);
            navigate('/'); // Redirect to home page after successful signup
        } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to create an account');
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                        <p className="text-gray-400">Join us to start your journey</p>
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
                        <motion.div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white"
                                required
                            />
                        </motion.div>

                        <motion.div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white"
                                required
                            />
                        </motion.div>

                        <motion.div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white"
                                required
                            />
                        </motion.div>

                        <motion.div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white"
                                required
                            />
                        </motion.div>

                        <motion.div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[hsl(var(--neon-primary))] text-black font-bold py-3 px-4 rounded-lg"
                            >
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </motion.div>
                    </form>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-6 text-center"
                    >
                        <p className="text-gray-400">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[hsl(var(--neon-primary))] hover:text-[hsl(var(--neon-secondary))] transition-colors duration-300">
                                Sign in
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup; 