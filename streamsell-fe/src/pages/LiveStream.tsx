import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

interface StreamDetails {
    title: string;
    description: string;
}

const LiveStream = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [streamDetails, setStreamDetails] = useState<StreamDetails>({
        title: '',
        description: ''
    });
    const [isSetupComplete, setIsSetupComplete] = useState(false);

    useEffect(() => {
        if (user?.userType !== 'organization') {
            navigate('/');
            return;
        }

        if (isSetupComplete) {
            startStream();
        }
    }, [user, navigate, isSetupComplete]);

    const startStream = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsStreaming(true);
            }
        } catch (err) {
            console.error('Error accessing media devices:', err);
            setError('Failed to access camera and microphone. Please ensure you have granted the necessary permissions.');
        }
    };

    const stopStream = async () => {
        try {
            if (videoRef.current?.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                // Stop all tracks
                stream.getTracks().forEach(track => {
                    track.stop();
                    stream.removeTrack(track);
                });
                // Clear the video source
                videoRef.current.srcObject = null;
                setIsStreaming(false);
            }
            // Navigate after cleanup
            navigate('/dashboard/org');
        } catch (err) {
            console.error('Error stopping stream:', err);
            setError('Error stopping stream. Please try again.');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (streamDetails.title.trim() === '') {
            setError('Please enter a stream title');
            return;
        }
        setIsSetupComplete(true);
    };

    if (!user) return null;

    if (!isSetupComplete) {
        return (
            <div className="min-h-screen bg-black text-white p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <h1 className="text-4xl font-bold mb-8">Setup Your Stream</h1>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-lg font-medium mb-2">
                                Stream Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={streamDetails.title}
                                onChange={(e) => setStreamDetails(prev => ({ ...prev, title: e.target.value }))}
                                className="w-full bg-gray-900 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                                placeholder="Enter stream title"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-lg font-medium mb-2">
                                Stream Description
                            </label>
                            <textarea
                                id="description"
                                value={streamDetails.description}
                                onChange={(e) => setStreamDetails(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full bg-gray-900 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 h-32 resize-none"
                                placeholder="Enter stream description"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-900/50 border border-red-500/50 rounded-xl p-4 text-red-400">
                                {error}
                            </div>
                        )}

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => navigate('/dashboard/org')}
                                className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
                            >
                                Start Streaming
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold">{streamDetails.title}</h1>
                        <p className="text-gray-400 mt-2">{streamDetails.description}</p>
                    </div>
                    <button
                        onClick={stopStream}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-xl transition-all duration-200"
                    >
                        End Stream
                    </button>
                </div>

                {error ? (
                    <div className="bg-red-900/50 border border-red-500/50 rounded-xl p-6 text-center">
                        <p className="text-red-400">{error}</p>
                    </div>
                ) : (
                    <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-full object-cover"
                        />
                        {!isStreaming && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-500/20">
                        <h2 className="text-2xl font-semibold mb-4">Stream Controls</h2>
                        <div className="space-y-4">
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl transition-all duration-200">
                                Toggle Camera
                            </button>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl transition-all duration-200">
                                Toggle Microphone
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-500/20">
                        <h2 className="text-2xl font-semibold mb-4">Stream Info</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span>Live</span>
                            </div>
                            <p className="text-gray-300">
                                Stream started by {user.username}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LiveStream; 