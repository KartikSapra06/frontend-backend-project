'use client'

export default function HeroSection() {
  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#0a0a0a'
      }}
    >
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/luxury-fine-dining-restaurant-interior-elegant.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Fallback solid dark background if image doesn't load */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-5"></div>
      
      <div className="relative text-center max-w-3xl px-4 z-10">
        <div className="mb-6">
          <h1 className="font-playfair text-7xl md:text-8xl gold-text mb-2">AKAG</h1>
          <p className="font-playfair text-3xl md:text-4xl text-gray-300">RESIDENCY</p>
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-8 w-32 mx-auto"></div>
        
        <p className="font-lato text-lg md:text-xl text-gray-300 mb-8">
          Experience Fine Indian Dining at its Finest
        </p>
        <p className="font-lato text-sm md:text-base text-gray-400 mb-8">
          492 Ambala, Haryana 134003 • Since 2015
        </p>

        <div className="flex justify-center gap-6">
          <a 
            href="#menu"
            className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-black transition-all"
          >
            Explore Menu
          </a>
          <a 
            href="#reservation"
            className="px-8 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all"
          >
            Reserve Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
