import { useState, useEffect } from "react";
import { Video, MapPin, Wallet, Store, Users, Activity, Zap, Plus, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [analyticsData, setAnalyticsData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAnalyticsData(Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)));
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Card hover animation variants
  const cardVariants = {
    hover: { 
      scale: 1.02,
      borderColor: "hsl(var(--neon-primary) / 0.3)"
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Header section */}
      <div className="bg-gradient-to-b from-[#12123E] to-[#0A0A0F] p-8 pb-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--neon-primary))]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[hsl(var(--neon-secondary))]/5 blur-[100px] rounded-full" />
        
        {/* Welcome text */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, <span className="bg-gradient-to-r from-[hsl(var(--neon-primary))] to-[hsl(var(--neon-secondary))] text-transparent bg-clip-text">Alex</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Your last campaign reached <span className="text-[hsl(var(--neon-primary))]">3.2k tourists</span> in Paris. Ready to launch your next experience?
          </p>
          
          {/* Action buttons */}
          <div className="flex gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 0, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#00FF00]/10 rounded-lg text-[#00FF00] font-medium border border-[#00FF00]/20 hover:bg-[#00FF00]/15 transition-all duration-300"
            >
              <Video className="w-5 h-5" />
              Launch a Livestream
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(149, 76, 233, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#954CE9]/10 rounded-lg text-[#954CE9] font-medium border border-[#954CE9]/20 hover:bg-[#954CE9]/15 transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Start Geo Campaign
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 -mt-24">
        <div className="grid grid-cols-12 gap-6">
          {/* Quick Actions Section */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: <Video className="w-5 h-5 text-[#00FF00]" />, 
                  title: "Go Live with IVS", 
                  description: "Launch a new live stream with AWS Interactive Video Service.",
                  bgColor: "bg-[#00FF00]/5",
                  borderColor: "border-[#00FF00]/10",
                  hoverEffect: "hover:border-[#00FF00]/30 hover:bg-[#00FF00]/8"
                },
                { 
                  icon: <MapPin className="w-5 h-5 text-[#954CE9]" />, 
                  title: "Set Geofence Campaign", 
                  description: "Create a geo-targeted campaign for tourists in specific locations.",
                  bgColor: "bg-[#954CE9]/5",
                  borderColor: "border-[#954CE9]/10",
                  hoverEffect: "hover:border-[#954CE9]/30 hover:bg-[#954CE9]/8"
                },
                { 
                  icon: <Wallet className="w-5 h-5 text-[#00FF00]" />, 
                  title: "Connect Wallet / Payment", 
                  description: "Set up your payment methods and connect crypto wallets.",
                  bgColor: "bg-[#00FF00]/5",
                  borderColor: "border-[#00FF00]/10",
                  hoverEffect: "hover:border-[#00FF00]/30 hover:bg-[#00FF00]/8"
                },
                { 
                  icon: <Store className="w-5 h-5 text-[#954CE9]" />, 
                  title: "NFT Storefront", 
                  description: "Create and manage NFTs for your travel experiences.",
                  bgColor: "bg-[#954CE9]/5",
                  borderColor: "border-[#954CE9]/10",
                  hoverEffect: "hover:border-[#954CE9]/30 hover:bg-[#954CE9]/8"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg border ${card.borderColor} ${card.bgColor} ${card.hoverEffect} backdrop-blur-sm relative transition-all duration-300 min-h-[120px]`}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                >
                  <div className="flex flex-col h-full">
                    <div className={`p-2 rounded-lg ${card.bgColor} w-fit`}>
                      {card.icon}
                    </div>
                    <h3 className="text-base font-semibold mt-3 text-white">{card.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 flex-grow line-clamp-2">{card.description}</p>
                    {activeCard === index && (
                      <motion.div
                        className="absolute bottom-4 right-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics Section */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 p-6 h-full">
              <h2 className="text-lg font-semibold mb-6">Real-time Metrics</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[hsl(var(--neon-primary))]" />
                    <span className="text-gray-400 text-sm">Viewers Online</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold">1,284</span>
                    <span className="text-[hsl(var(--neon-primary))] text-sm">+12.5%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-[hsl(var(--neon-secondary))]" />
                    <span className="text-gray-400 text-sm">Active Streams</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold">16</span>
                    <span className="text-[hsl(var(--neon-secondary))] text-sm">+3</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[hsl(var(--neon-primary))]" />
                    <span className="text-gray-400 text-sm">NFTs Sold</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold">23</span>
                    <span className="text-red-400 text-sm">-2.8%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[hsl(var(--neon-secondary))]" />
                    <span className="text-gray-400 text-sm">Geo-Triggers</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold">89</span>
                    <span className="text-[hsl(var(--neon-secondary))] text-sm">+41.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 p-6">
              <h2 className="text-lg font-semibold mb-6">Analytics Overview</h2>
              <div className="h-[300px] relative">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-[hsl(var(--neon-primary))]/20 border-t-[hsl(var(--neon-primary))] rounded-full"
                    />
                  </div>
                ) : (
                  <div className="relative h-full">
                    {analyticsData.map((value, i) => (
                      <motion.div
                        key={i}
                        className="absolute bottom-0 bg-[hsl(var(--neon-primary))]/30 rounded-t"
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        style={{
                          left: `${(i * 100) / analyticsData.length}%`,
                          width: `${80 / analyticsData.length}%`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
                <button className="text-[hsl(var(--neon-primary))] text-sm hover:text-[hsl(var(--neon-primary))]/80">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Live Stream Started", description: "Tokyo Night Walk tour stream started", time: "Just now" },
                  { title: "Geo-Campaign Triggered", description: "38 viewers in Shibuya Crossing zone", time: "5 min ago" },
                  { title: "NFT Sold", description: "Kyoto Temples Collection sold for 0.8 ETH", time: "25 min ago" },
                  { title: "Payment Received", description: "$350 payment from Tour Experience booking", time: "1 hour ago" },
                  { title: "Stream Ended", description: "Venice Canal tour ended with 567 viewers", time: "2 hours ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${index % 2 === 0 ? 'bg-[hsl(var(--neon-primary))]' : 'bg-[hsl(var(--neon-secondary))]'}`} />
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-gray-400 text-sm">{activity.description}</p>
                      <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <motion.button
        className="fixed bottom-6 right-6 p-4 rounded-full bg-[hsl(var(--neon-secondary))] text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Plus className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Dashboard; 