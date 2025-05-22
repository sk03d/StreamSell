import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const UserDashboard = () => {
  const { user } = useAuth();

  // Redirect if not a user
  if (user?.userType !== 'user') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-dark-200/90 backdrop-blur-lg rounded-2xl border border-primary-500/20 p-6">
          <h1 className="text-3xl font-bold text-white mb-6">
            Welcome, {user.username}!
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Dashboard Cards */}
            <div className="bg-dark-100/50 rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">My Bookings</h3>
              <p className="text-gray-400">View and manage your travel bookings</p>
            </div>

            <div className="bg-dark-100/50 rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Live Streams</h3>
              <p className="text-gray-400">Watch and interact with live travel streams</p>
            </div>

            <div className="bg-dark-100/50 rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">My Profile</h3>
              <p className="text-gray-400">Update your personal information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 