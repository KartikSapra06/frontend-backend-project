'use client'

import { useState, useEffect } from 'react'
import MenuCard from './menu-card'
import { menuItems } from '@/lib/menu-data'

interface MenuSectionsProps {
  onCartUpdate: () => void
}

export default function MenuSections({ onCartUpdate }: MenuSectionsProps) {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const cats = [...new Set(menuItems.map(item => item.category))]
    const orderedCats = ['signature', ...cats.filter(cat => cat !== 'signature')]
    setCategories(orderedCats)
  }, [])

  return (
    <div id="menu" className="bg-black py-20">
      {categories.map((category) => {
        const categoryItems = menuItems.filter(item => item.category === category)
        let categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)
        if (category === 'signature') {
          categoryTitle = "Chef's Special"
        }
        
        return (
          <section key={category} className="mb-20">
            <div className="max-w-7xl mx-auto px-4">
              {/* Category header */}
              <div className="mb-12 text-center">
                <h2 className="font-playfair text-5xl gold-text mb-3">{categoryTitle}</h2>
                {category === 'signature' && (
                  <p className="text-yellow-400 text-sm mb-4 font-lato">★ Our Most Celebrated Dishes ★</p>
                )}
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-24 mx-auto"></div>
              </div>

              {/* Menu items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map(item => (
                  <MenuCard key={item.id} item={item} onCartUpdate={onCartUpdate} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
