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

export default function ReservationView() {
  const [formData, setFormData] = useState<Reservation>({
    date: '',
    time: '',
    guests: 2,
    name: '',
    phone: '',
    specialRequests: '',
  })
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reservation') || '[]')
    setReservations(saved)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const updated = [...reservations, formData]
    localStorage.setItem('reservation', JSON.stringify(updated))
    setReservations(updated)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)

    // Reset form
    setFormData({
      date: '',
      time: '',
      guests: 2,
      name: '',
      phone: '',
      specialRequests: '',
    })

    // Send WhatsApp message
    const message = `Reservation Request:\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nPhone: ${formData.phone}\nSpecial Requests: ${formData.specialRequests || 'None'}`
    window.open(`https://wa.me/919896819800?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl gold-text mb-2">Reserve Your Table</h2>
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-6 w-24"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-600 rounded-lg p-8">
            {submitted && (
              <div className="mb-4 p-3 bg-green-600/20 border border-green-600 rounded text-green-400 text-sm">
                ✓ Reservation request sent! You'll receive confirmation via WhatsApp.
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
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
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
                  placeholder="Any dietary restrictions or special requests?"
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

          {/* Reservations List */}
          <div>
            <h3 className="font-playfair text-2xl gold-text mb-6">Your Reservations</h3>
            <div className="space-y-4">
              {reservations.length === 0 ? (
                <p className="text-gray-400">No reservations yet</p>
              ) : (
                reservations.map((res, idx) => (
                  <div key={idx} className="border border-yellow-600 rounded-lg p-4 bg-gray-900/50">
                    <p className="text-white font-semibold">{res.date} at {res.time}</p>
                    <p className="text-yellow-500 text-sm">{res.guests} guests</p>
                    <p className="text-gray-400 text-sm mt-2">{res.name}</p>
                  </div>
                ))
              )}
            </div>

            {/* Restaurant Info */}
            <div className="mt-8 border-t border-yellow-600 pt-8">
              <h4 className="font-playfair text-lg gold-text mb-4">Restaurant Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 123 Ambala, Haryana</p>
                <p>📞 +91 9896819800</p>
                <p>🕐 11:00 AM - 11:00 PM</p>
                <p>📅 Open All Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
