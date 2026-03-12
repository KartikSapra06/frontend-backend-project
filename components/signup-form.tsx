'use client'

import { useState } from 'react'

interface SignupFormProps {
  onSignup: (email: string, password: string, name: string) => void
}

export default function SignupForm({ onSignup }: SignupFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && password) {
      onSignup(email, password, name)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="font-playfair text-2xl gold-text mb-8">Create Account</h2>

      <div>
        <label className="block text-sm text-gray-300 mb-2">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-2 rounded transition-colors"
      >
        Sign Up
      </button>
    </form>
  )
}
