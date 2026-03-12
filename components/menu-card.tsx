'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  tags: string[]
}

interface MenuCardProps {
  item: MenuItem
  onCartUpdate: () => void
}

export default function MenuCard({ item, onCartUpdate }: MenuCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [showAdded, setShowAdded] = useState(false)

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((c: any) => c.id === item.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ ...item, quantity })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    onCartUpdate()

    setShowAdded(true)
    setTimeout(() => setShowAdded(false), 2000)
    setQuantity(1)
  }

  return (
    <div className="border border-yellow-600 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-yellow-600/50 transition-all group">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-800">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-yellow-600 text-black text-xs font-bold rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
        <h3 className="font-playfair text-xl gold-text mb-2">{item.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>

        {/* Price and Quantity */}
        <div className="flex items-center justify-between mb-4">
          <p className="font-playfair text-2xl gold-text">₹{item.price}</p>
          <div className="flex items-center gap-2 bg-black border border-yellow-600 rounded px-3 py-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-yellow-500 hover:text-yellow-400"
            >
              −
            </button>
            <span className="text-white px-2">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-yellow-500 hover:text-yellow-400"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded font-bold transition-all ${
            showAdded
              ? 'bg-green-600 text-white'
              : 'bg-yellow-600 hover:bg-yellow-500 text-black'
          }`}
        >
          {showAdded ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
