'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black border-t border-yellow-600 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl gold-text mb-3">Get in Touch</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-24 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div className="border border-yellow-600 rounded-lg p-8 bg-gradient-to-b from-gray-900 to-black text-center hover:shadow-lg hover:shadow-yellow-600/30 transition-all">
            <div className="text-4xl gold-text mb-4">📍</div>
            <h3 className="font-playfair text-xl gold-text mb-2">Location</h3>
            <p className="text-gray-400">492 Ambala, Haryana 134003</p>
            <p className="text-gray-500 text-sm mt-2">Prime Location in Heart of the City</p>
          </div>

          {/* Phone */}
          <div className="border border-yellow-600 rounded-lg p-8 bg-gradient-to-b from-gray-900 to-black text-center hover:shadow-lg hover:shadow-yellow-600/30 transition-all">
            <div className="text-4xl gold-text mb-4">📞</div>
            <h3 className="font-playfair text-xl gold-text mb-2">Phone</h3>
            <p className="text-gray-400">+91 9896819800</p>
            <p className="text-gray-500 text-sm mt-2">Available 24/7 for Reservations</p>
          </div>

          {/* Email */}
          <div className="border border-yellow-600 rounded-lg p-8 bg-gradient-to-b from-gray-900 to-black text-center hover:shadow-lg hover:shadow-yellow-600/30 transition-all">
            <div className="text-4xl gold-text mb-4">✉️</div>
            <h3 className="font-playfair text-xl gold-text mb-2">Email</h3>
            <p className="text-gray-400">info@akagresidency.com</p>
            <p className="text-gray-500 text-sm mt-2">For Special Events & Catering</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-yellow-600 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            AKAG RESIDENCY • Fine Dining Experience Since 2015
          </p>
          <p className="text-gray-600 text-sm">
            © 2025 All Rights Reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </section>
  )
}
