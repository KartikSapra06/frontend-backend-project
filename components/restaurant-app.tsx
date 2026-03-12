'use client'

import { useState, useEffect } from 'react'
import Navigation from './navigation'
import HeroSection from './hero-section'
import MenuSections from './menu-sections'
import CartSidebar from './cart-sidebar'
import ReservationSection from './reservation-section'
import ContactSection from './contact-section'

interface RestaurantAppProps {
  user: { name: string; email: string } | null
  onLogout: () => void
}

export default function RestaurantApp({ user, onLogout }: RestaurantAppProps) {
  const [cartCount, setCartCount] = useState(0)
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart.length)
  }, [])

  const handleCartUpdate = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart.length)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation 
        user={user} 
        onLogout={onLogout}
        cartCount={cartCount}
        onCartClick={() => setShowCart(!showCart)}
        showCart={showCart}
      />

      <CartSidebar 
        visible={showCart} 
        onClose={() => setShowCart(false)}
        onCartUpdate={handleCartUpdate}
      />

      <main className="pt-20">
        <HeroSection />
        <MenuSections onCartUpdate={handleCartUpdate} />
        <ReservationSection />
        <ContactSection />
      </main>
    </div>
  )
}
