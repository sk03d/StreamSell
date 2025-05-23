import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const OrgDashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isStreaming, setIsStreaming] = useState(false);

    useEffect(() => {
        if (user?.userType !== 'organization') {
            navigate('/');
        }
    }, [user, navigate]);

    const handleStartStream = () => {
        setIsStreaming(true);
        navigate('/stream/live');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8">Organization Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Stream Management Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-500/20"
                    >
                        <h2 className="text-2xl font-semibold mb-4">Stream Management</h2>
                        <p className="text-gray-300 mb-6">
                            Start a new live stream or manage your existing streams
                        </p>
                        <button
                            onClick={handleStartStream}
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium"
                        >
                            {isStreaming ? 'Stream in Progress' : 'Start New Stream'}
                        </button>
                    </motion.div>

                    {/* Analytics Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-500/20"
                    >
                        <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
                        <p className="text-gray-300 mb-6">
                            View your stream statistics and audience engagement
                        </p>
                        <button
                            onClick={() => navigate('/analytics')}
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium"
                        >
                            View Analytics
                        </button>
                    </motion.div>

                    {/* Bookings Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-500/20"
                    >
                        <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
                        <p className="text-gray-300 mb-6">
                            Manage your stream bookings and schedules
                        </p>
                        <button
                            onClick={() => navigate('/bookings')}
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium"
                        >
                            Manage Bookings
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default OrgDashboard; 