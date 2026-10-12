import { useNavigate } from 'react-router-dom'
import { LoginForm } from '@/modules/auth/components/LoginForm'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Login Card */}
        <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-slate-400">Sign in to your account to continue</p>
          </div>

          <LoginForm onSuccess={() => navigate('/dashboard')} />

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-400">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/auth/signup')}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
