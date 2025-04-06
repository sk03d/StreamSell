import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import { signupSchema, type SignupFormData } from '../utils/validationSchema';
import backimage from './back.jpeg';

const Signup = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: SignupFormData) => {
        try {
            setIsLoading(true);
            // Add your signup API call here
            console.log('Signup data:', data);
            toast.success('Account created successfully!');
            navigate('/login');
        } catch (error) {
            toast.error('Signup failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <ToastContainer position="top-right" autoClose={3000} aria-label="Notifications" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8 bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-white/10"
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Join us to start your journey
                    </p>
                </motion.div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('username')}
                                    id="username"
                                    type="text"
                                    className={`appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border ${
                                        errors.username ? 'border-red-500' : 'border-white/10'
                                    } bg-black/50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--neon-primary))] focus:border-transparent`}
                                    placeholder="Username"
                                />
                            </div>
                            <AnimatePresence>
                                {errors.username && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.username.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('email')}
                                    id="email"
                                    type="email"
                                    className={`appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border ${
                                        errors.email ? 'border-red-500' : 'border-white/10'
                                    } bg-black/50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--neon-primary))] focus:border-transparent`}
                                    placeholder="Email address"
                                />
                            </div>
                            <AnimatePresence>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="relative"
                        >
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('password')}
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className={`appearance-none rounded-lg relative block w-full pl-10 pr-10 py-2 border ${
                                        errors.password ? 'border-red-500' : 'border-white/10'
                                    } bg-black/50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--neon-primary))] focus:border-transparent`}
                                    placeholder="Password"
                                />
                                <motion.button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[hsl(var(--neon-primary))]"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </motion.button>
                            </div>
                            <AnimatePresence>
                                {errors.password && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.password.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="relative"
                        >
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('confirmPassword')}
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className={`appearance-none rounded-lg relative block w-full pl-10 pr-10 py-2 border ${
                                        errors.confirmPassword ? 'border-red-500' : 'border-white/10'
                                    } bg-black/50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--neon-primary))] focus:border-transparent`}
                                    placeholder="Confirm Password"
                                />
                                <motion.button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[hsl(var(--neon-primary))]"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </motion.button>
                            </div>
                            <AnimatePresence>
                                {errors.confirmPassword && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.confirmPassword.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <motion.button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[hsl(var(--neon-primary))] hover:bg-[hsl(var(--neon-primary))]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--neon-primary))]"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isLoading}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            <span className="flex items-center">
                                {isLoading ? (
                                    'Creating account...'
                                ) : (
                                    <>
                                        Sign up
                                        <motion.span
                                            animate={{ x: isHovered ? 5 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="ml-2"
                                        >
                                            <ArrowRight className="h-4 w-4" />
                                        </motion.span>
                                    </>
                                )}
                            </span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-center"
                    >
                        <Link
                            to="/login"
                            className="font-medium text-[hsl(var(--neon-primary))] hover:text-[hsl(var(--neon-primary))]/80 transition-colors duration-300"
                        >
                            Already have an account? Sign in
                        </Link>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default Signup; 