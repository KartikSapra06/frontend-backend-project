'use client'

import { useState } from 'react'
import LoginForm from './login-form'
import SignupForm from './signup-form'

interface AuthPageProps {
  onLogin: (email: string, password: string, name: string) => void
}

export default function AuthPage({ onLogin }: AuthPageProps) {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl gold-text mb-2">AKAG</h1>
          <p className="text-gray-400 text-sm tracking-widest">RESIDENCY</p>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-6"></div>
          <p className="text-gray-500 text-xs">Fine Dining Experience</p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-600 rounded-lg p-8 shadow-2xl">
          {isSignup ? (
            <SignupForm 
              onSignup={(email, password, name) => {
                onLogin(email, password, name)
              }}
            />
          ) : (
            <LoginForm onLogin={onLogin} />
          )}

          {/* Toggle */}
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
            </p>
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="mt-2 text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-gray-600">
          <p>123 Ambala, Haryana | +91 9896819800</p>
        </div>
      </div>
    </div>
  )
}
