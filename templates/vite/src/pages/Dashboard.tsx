import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart3, Users, TrendingUp, Activity, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/modules/auth/store/auth.store'

export default function Dashboard() {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const [activeTab, setActiveTab] = useState('overview')

  const stats = useMemo(() => [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+8.2%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '+3.1%',
      icon: Activity,
      color: 'bg-purple-500'
    },
    {
      title: 'Analytics',
      value: '98.5%',
      change: '+2.4%',
      icon: BarChart3,
      color: 'bg-orange-500'
    }
  ], [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-2">Welcome back! Here's your performance overview.</p>
        </div>
        <Button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white"
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.title}
              className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                  <p className="text-green-400 text-sm mt-2">{stat.change} from last month</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-4 border-b border-slate-700">
        {['overview', 'analytics', 'reports'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === tab
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-lg p-6">
        <div className="min-h-96 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 size={48} className="mx-auto text-slate-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Content
            </h3>
            <p className="text-slate-400">
              Your {activeTab} data will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
