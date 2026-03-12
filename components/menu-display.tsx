'use client'

import { useState, useEffect } from 'react'
import MenuCard from './menu-card'
import { menuItems } from '@/lib/menu-data'

interface MenuDisplayProps {
  onCartUpdate: () => void
}

export default function MenuDisplay({ onCartUpdate }: MenuDisplayProps) {
  const [selectedCategory, setSelectedCategory] = useState('starters')
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const cats = [...new Set(menuItems.map(item => item.category))]
    setCategories(cats)
  }, [])

  const filteredItems = menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair text-5xl gold-text mb-3">Check Out</h2>
          <p className="font-playfair text-4xl text-white mb-2">Our Menu</p>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-6 w-24 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Indian cuisine, prepared with premium ingredients and traditional recipes
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 bg-black/95 backdrop-blur border-b border-yellow-600 py-6 px-4 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded whitespace-nowrap font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-600 text-black'
                    : 'border border-yellow-600 text-yellow-500 hover:bg-yellow-600/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} onCartUpdate={onCartUpdate} />
          ))}
        </div>
      </div>
    </div>
  )
}
