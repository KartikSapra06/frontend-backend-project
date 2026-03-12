'use client'

import { useState, useEffect } from 'react'
import AuthPage from '@/components/auth-page'
import RestaurantApp from '@/components/restaurant-app'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage for existing session
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      setUser(userData)
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (email: string, password: string, name: string) => {
    const userData = { name, email }
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    localStorage.removeItem('reservation')
    setUser(null)
    setIsAuthenticated(false)
  }

  if (!mounted) return null

  return (
    <main>
      {!isAuthenticated ? (
        <AuthPage onLogin={handleLogin} />
      ) : (
        <RestaurantApp user={user} onLogout={handleLogout} />
      )}
    </main>
  )
}
