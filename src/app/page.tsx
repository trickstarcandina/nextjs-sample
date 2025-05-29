import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">Healing Moments</h1>
            <p className="mt-2 text-gray-600 animate-fade-in delay-100">A place for comfort with stories and cute images.</p>
          </div>
          <nav className="flex gap-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Home</Link>
            <Link href="/stories" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Stories</Link>
            <Link href="/gallery" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Gallery</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 animate-fade-in delay-200">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample story cards */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-300">
              <h3 className="text-xl font-medium text-gray-900">The Kind Little Bird</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A small bird helps a friend in need...</p>
              <Link href="/stories/1" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</Link>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-400">
              <h3 className="text-xl font-medium text-gray-900">Sunny Meadow Dreams</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A peaceful day in a magical meadow...</p>
              <Link href="/stories/2" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</Link>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-500">
              <h3 className="text-xl font-medium text-gray-900">The Lost Star</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A tiny star finds its way home...</p>
              <Link href="/stories/3" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</Link>
            </div>
          </div>
          <div className="mt-8 text-center animate-fade-in delay-600">
            <Link href="/stories" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">View All Stories</Link>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 animate-fade-in delay-700">Cute Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* Sample cat images */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-800">
              <img src="https://picsum.photos/300/300?random=1&category=cats" alt="Cute cat 1" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-900">
              <img src="https://picsum.photos/300/300?random=2&category=cats" alt="Cute cat 2" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-1000">
              <img src="https://picsum.photos/300/300?random=3&category=cats" alt="Cute cat 3" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-1100">
              <img src="https://picsum.photos/300/300?random=4&category=cats" alt="Cute cat 4" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
            </div>
          </div>
          <div className="mt-8 text-center animate-fade-in delay-1200">
            <Link href="/gallery" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">View Full Gallery</Link>
          </div>
        </section>
      </main>
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 animate-fade-in delay-1300">
          <p>© 2025 Healing Moments. Wishing you a speedy recovery.</p>
        </div>
      </footer>
    </div>
  );
}
