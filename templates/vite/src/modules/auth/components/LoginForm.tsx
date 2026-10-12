/**
 * Login Form Component
 * Example form using react-hook-form + Zod validation
 * Shows form handling patterns and error display
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, Mail, Lock } from 'lucide-react'
import { useAuthStore } from '../store/auth.store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Validation schema using Zod
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

interface LoginFormProps {
  onSuccess?: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate()
  const { login, isLoading, error: authError } = useAuthStore()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      setSubmitError(null)
      await login(data.email, data.password)
      // Redirect to dashboard on successful login
      if (onSuccess) {
        onSuccess()
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'An error occurred during login'
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail size={18} className="absolute left-3 top-3 text-slate-500" />
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register('email')}
            disabled={isLoading}
            className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-500"
          />
        </div>
        {errors.email && (
          <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock size={18} className="absolute left-3 top-3 text-slate-500" />
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register('password')}
            disabled={isLoading}
            className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-500"
          />
        </div>
        {errors.password && (
          <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Error Messages */}
      {(submitError || authError) && (
        <div className="rounded-md bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
          {submitError || authError}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
          </>
        ) : (
          'Login'
        )}
      </Button>

      {/* Demo Credentials Note */}
      <div className="rounded-md bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-300">
        <p className="font-semibold mb-1">Demo Credentials:</p>
        <p>Email: demo@example.com</p>
        <p>Password: password123</p>
      </div>
    </form>
  )
}

export default LoginForm
