import { Video, MapPin, Wallet, Store, Users, Activity, Zap, BarChart } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cyber-black overflow-x-hidden circuit-bg relative">
      {/* Background ambiance effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-purple/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyber-turquoise/10 blur-[100px] rounded-full"></div>
      
      {/* Main content */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        {/* Welcome banner */}
        <div className="cyber-glow mb-8">
          <div className="p-6 rounded-lg border border-zinc-800">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome to StreamSell24</h1>
            <p className="text-muted-foreground">Your all-in-one platform for live streaming and digital commerce</p>
          </div>
        </div>
        
        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main section (2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick access cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="cyber-glow p-5 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-cyber-turquoise/10">
                    <Video className="w-6 h-6 text-cyber-turquoise" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Go Live with IVS</h3>
                    <p className="text-sm text-muted-foreground">Launch a new live stream with AWS Interactive Video Service.</p>
                  </div>
                </div>
              </div>
              <div className="cyber-glow p-5 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-cyber-purple/10">
                    <MapPin className="w-6 h-6 text-cyber-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Set Geofence Campaign</h3>
                    <p className="text-sm text-muted-foreground">Create a geo-targeted campaign for tourists in specific locations.</p>
                  </div>
                </div>
              </div>
              <div className="cyber-glow p-5 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-cyber-teal/10">
                    <Wallet className="w-6 h-6 text-cyber-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Connect Wallet / Payment</h3>
                    <p className="text-sm text-muted-foreground">Set up your payment methods and connect crypto wallets.</p>
                  </div>
                </div>
              </div>
              <div className="cyber-glow p-5 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-cyber-pink/10">
                    <Store className="w-6 h-6 text-cyber-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">NFT Storefront</h3>
                    <p className="text-sm text-muted-foreground">Create and manage NFTs for your travel experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Latest analytics */}
            <div className="cyber-glow">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white mb-4">Analytics Overview</h2>
                <div className="relative h-72 rounded-lg border border-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="w-12 h-12 mx-auto text-cyber-turquoise/50 mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Analytics visualization would appear here
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-3/5 bg-gradient-to-t from-cyber-turquoise/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-turquoise/40 to-transparent"></div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute bottom-0 h-[10%] w-6 bg-cyber-turquoise/80 rounded-t-sm" 
                      style={{ 
                        left: `${10 + i * 20}%`, 
                        height: `${10 + Math.floor(Math.random() * 50)}%`,
                        opacity: 0.3 + Math.random() * 0.7
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right sidebar (1/3 width on large screens) */}
          <div className="space-y-6">
            {/* Real-time metrics */}
            <div className="cyber-glow p-5">
              <h2 className="text-lg font-semibold text-white mb-4">Real-time Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyber-turquoise/10">
                      <Users className="w-5 h-5 text-cyber-turquoise" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Viewers Online</p>
                      <p className="text-xl font-semibold text-white">1,284</p>
                      <p className="text-xs text-green-500">+12.5%</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyber-purple/10">
                      <Video className="w-5 h-5 text-cyber-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Streams</p>
                      <p className="text-xl font-semibold text-white">16</p>
                      <p className="text-xs text-green-500">+3</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyber-teal/10">
                      <Activity className="w-5 h-5 text-cyber-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">NFTs Sold</p>
                      <p className="text-xl font-semibold text-white">23</p>
                      <p className="text-xs text-red-500">-2.8%</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyber-pink/10">
                      <Zap className="w-5 h-5 text-cyber-pink" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Geo-Triggers</p>
                      <p className="text-xl font-semibold text-white">89</p>
                      <p className="text-xs text-green-500">+41.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Activity feed */}
            <div className="cyber-glow h-[320px] overflow-hidden">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyber-turquoise"></div>
                      <div>
                        <p className="text-sm text-white">New stream started</p>
                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Integration status */}
            <div className="cyber-glow h-[270px] overflow-hidden">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white mb-4">Integration Status</h2>
                <div className="space-y-4">
                  {['AWS IVS', 'Payment Gateway', 'NFT Marketplace', 'Geofencing API'].map((service, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-white">{service}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">Connected</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating action button */}
      <button className="fixed bottom-6 right-6 p-4 rounded-full bg-cyber-turquoise text-white shadow-lg hover:bg-cyber-turquoise/90 transition-colors">
        <Video className="w-6 h-6" />
      </button>
    </div>
  )
}

export default Dashboard 