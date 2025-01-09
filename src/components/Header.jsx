import React from 'react'
import { Phone } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-700 via-teal-500 to-green-500 shadow-lg text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Enhanced brand name design */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-white drop-shadow-md">
          <span className="text-green-200">FRESH</span>
          <span className="text-white"> & </span>
          <span className="text-green-200">FLUFFY</span>
          <br />
          <span className="text-blue-300">DRY CLEANING</span>
        </h1>
        {/* Navigation links with larger font and spacing */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="text-lg font-semibold text-white hover:text-teal-200 tracking-wide"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-lg font-semibold text-white hover:text-teal-200 tracking-wide"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="text-lg font-semibold text-white hover:text-teal-200 tracking-wide"
          >
            FAQ
          </a>
        </nav>
        <a
          href="tel:+2348012345678"
          className="flex items-center text-white hover:text-teal-200"
        >
          <Phone className="mr-2" />
          <span className="hidden md:inline">090 3550 8681</span>
        </a>
      </div>
    </header>
  )
}

export default Header
