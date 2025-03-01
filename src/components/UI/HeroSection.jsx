import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="bg-gray-900 py-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Hero Content */}
      <div className="hero-content text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Explore the world, One country at a time
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover the history, culture, and beauty of every nation. Search and
          filter through countries to find the details.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors">
          <span>Start Exploring</span>
          <FaLongArrowAltRight className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="hero-image flex justify-center md:justify-end">
        <img
          src="/images/world.png"
          alt="world"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  </main>
  )
}

export default HeroSection
