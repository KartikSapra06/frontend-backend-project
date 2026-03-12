'use client'

import { useState, useEffect } from 'react'

interface Reservation {
  date: string
  time: string
  guests: number
  name: string
  phone: string
  specialRequests: string
}

export default function ReservationSection() {
  const [formData, setFormData] = useState<Reservation>({
    date: '',
    time: '',
    guests: 2,
    name: '',
    phone: '',
    specialRequests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const reservations = JSON.parse(localStorage.getItem('reservation') || '[]')
    localStorage.setItem('reservation', JSON.stringify([...reservations, formData]))
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)

    // Send WhatsApp
    const message = `🍽️ Reservation Request\n\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nPhone: ${formData.phone}\nRequests: ${formData.specialRequests || 'None'}`
    window.open(`https://wa.me/919896819800?text=${encodeURIComponent(message)}`, '_blank')

    setFormData({ date: '', time: '', guests: 2, name: '', phone: '', specialRequests: '' })
  }

  return (
    <section id="reservation" className="py-20 bg-gradient-to-b from-black via-yellow-600/5 to-black px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl gold-text mb-3">Reserve Your Table</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-24 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-600 rounded-lg p-8">
            {submitted && (
              <div className="mb-4 p-3 bg-green-600/20 border border-green-600 rounded text-green-400 text-sm">
                ✓ Reservation sent via WhatsApp! We'll confirm shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm gold-text mb-2 font-semibold">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm gold-text mb-2 font-semibold">Time</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm gold-text mb-2 font-semibold">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white focus:outline-none focus:border-yellow-400"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm gold-text mb-2 font-semibold">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm gold-text mb-2 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400"
                  placeholder="+91 9876543210"
                  required
                />
              </div>

              <div>
                <label className="block text-sm gold-text mb-2 font-semibold">Special Requests</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-yellow-600 rounded text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 resize-none"
                  placeholder="Any dietary restrictions or preferences?"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors"
              >
                Reserve via WhatsApp
              </button>
            </form>
          </div>

          {/* Info Box */}
          <div className="space-y-8">
            <div className="border border-yellow-600 rounded-lg p-8 bg-gradient-to-b from-gray-900 to-black">
              <h3 className="font-playfair text-2xl gold-text mb-6">Why Choose Us?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="gold-text font-bold">✓</span>
                  <span>Authentic Indian cuisine prepared by master chefs</span>
                </li>
                <li className="flex gap-3">
                  <span className="gold-text font-bold">✓</span>
                  <span>Premium ambiance with elegant décor</span>
                </li>
                <li className="flex gap-3">
                  <span className="gold-text font-bold">✓</span>
                  <span>Diverse menu with vegetarian & non-vegetarian options</span>
                </li>
                <li className="flex gap-3">
                  <span className="gold-text font-bold">✓</span>
                  <span>Exceptional service and hospitality</span>
                </li>
              </ul>
            </div>

            <div className="border border-yellow-600 rounded-lg p-8 bg-gradient-to-b from-gray-900 to-black">
              <h3 className="font-playfair text-2xl gold-text mb-6">Opening Hours</h3>
              <div className="space-y-3 text-gray-300">
                <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                <p>Private Events: Available on request</p>
                <p className="text-sm text-gray-400">Minimum reservation: 2 guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
