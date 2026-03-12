'use client'

import { useState, useEffect } from 'react'
import CartItem from './cart-item'
import { generateWhatsAppMessage } from '@/lib/whatsapp-utils'

interface CartViewProps {
  onCartUpdate: () => void
}

export default function CartView({ onCartUpdate }: CartViewProps) {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
    const cartTotal = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    setTotal(cartTotal)
  }, [])

  const handleRemoveItem = (id: string) => {
    const updated = cartItems.filter(item => item.id !== id)
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    const cartTotal = updated.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    setTotal(cartTotal)
    onCartUpdate()
  }

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(id)
      return
    }
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    const cartTotal = updated.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    setTotal(cartTotal)
  }

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return

    const message = generateWhatsAppMessage(cartItems, total)
    const whatsappUrl = `https://wa.me/919896819800?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    // Clear cart after ordering
    localStorage.setItem('cart', '[]')
    setCartItems([])
    setTotal(0)
    onCartUpdate()
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl gold-text mb-2">Your Order</h2>
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-6 w-24"></div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-4">Your cart is empty</p>
            <p className="text-gray-500 text-sm">Start adding items from our menu!</p>
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
        )}

        {/* Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-yellow-600 pt-6">
            <div className="flex justify-between items-center mb-4">
              <p className="font-playfair text-2xl gold-text">Subtotal</p>
              <p className="font-playfair text-2xl gold-text">₹{total}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900 p-4 rounded border border-yellow-600">
                <p className="text-gray-400 text-sm mb-2">Delivery</p>
                <p className="gold-text font-bold">Free</p>
              </div>
              <div className="bg-gray-900 p-4 rounded border border-yellow-600">
                <p className="text-gray-400 text-sm mb-2">Tax</p>
                <p className="gold-text font-bold">Included</p>
              </div>
              <div className="bg-gray-900 p-4 rounded border border-yellow-600">
                <p className="text-gray-400 text-sm mb-2">Total Items</p>
                <p className="gold-text font-bold">
                  {cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0)}
                </p>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
