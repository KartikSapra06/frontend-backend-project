'use client'

import { useState } from 'react'

interface NavigationProps {
  user: { name: string; email: string } | null
  onLogout: () => void
  cartCount: number
  onCartClick: () => void
  showCart: boolean
}

export default function Navigation({
  user,
  onLogout,
  cartCount,
  onCartClick,
  showCart,
}: NavigationProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur border-b border-yellow-600 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex-shrink-0">
          <h1 className="font-playfair text-2xl gold-text">AKAG</h1>
          <p className="text-xs text-gray-500 -mt-1">RESIDENCY</p>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#menu" className="text-sm font-semibold text-gray-400 hover:gold-text transition-colors">Menu</a>
          <a href="#reservation" className="text-sm font-semibold text-gray-400 hover:gold-text transition-colors">Reserve</a>
          <a href="#contact" className="text-sm font-semibold text-gray-400 hover:gold-text transition-colors">Contact</a>
          
          <button
            onClick={onCartClick}
            className="relative text-sm font-semibold text-gray-400 hover:gold-text transition-colors"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-600 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <div className="text-sm text-gray-400 border-l border-yellow-600 pl-6">
            <p>{user?.name}</p>
          </div>
          
          <button
            onClick={onLogout}
            className="text-sm text-gray-400 hover:text-red-400 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative text-yellow-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10-9l2 9m-9 9h12m0 0a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v15a1 1 0 001 1z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-600 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-xs">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-yellow-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden border-t border-yellow-600 bg-black">
          <div className="px-4 py-4 space-y-4">
            <a href="#menu" className="block text-sm gold-text font-semibold" onClick={() => setShowMenu(false)}>Menu</a>
            <a href="#reservation" className="block text-sm text-gray-400 hover:gold-text font-semibold" onClick={() => setShowMenu(false)}>Reserve Table</a>
            <a href="#contact" className="block text-sm text-gray-400 hover:gold-text font-semibold" onClick={() => setShowMenu(false)}>Contact</a>
            <div className="pt-4 border-t border-gray-700 flex justify-between">
              <span className="text-xs text-gray-400">{user?.email}</span>
              <button onClick={onLogout} className="text-xs text-red-400 hover:text-red-300">Logout</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
