'use client'

import { useState, useEffect } from 'react'
import CartItem from './cart-item'
import { generateWhatsAppMessage } from '@/lib/whatsapp-utils'

interface CartSidebarProps {
  visible: boolean
  onClose: () => void
  onCartUpdate: () => void
}

export default function CartSidebar({ visible, onClose, onCartUpdate }: CartSidebarProps) {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
    const cartTotal = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    setTotal(cartTotal)
  }, [visible])

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
    localStorage.setItem('cart', '[]')
    setCartItems([])
    setTotal(0)
    onCartUpdate()
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      {visible && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 top-20"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-20 right-0 w-full md:w-96 max-h-[calc(100vh-80px)] bg-black border-l border-yellow-600 shadow-2xl shadow-yellow-600/50 transform transition-transform z-50 overflow-y-auto ${
        visible ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-2xl gold-text">Your Cart</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Cart is empty</p>
          ) : (
            <div className="space-y-4">
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
            <div className="border-t border-yellow-600 pt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal:</span>
                <span className="gold-text font-bold">₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Delivery:</span>
                <span className="gold-text font-bold">Free</span>
              </div>
              <div className="border-t border-yellow-600 pt-4 flex justify-between">
                <span className="gold-text font-bold">Total:</span>
                <span className="gold-text font-bold text-lg">₹{total}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors mt-4"
              >
                Order via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
