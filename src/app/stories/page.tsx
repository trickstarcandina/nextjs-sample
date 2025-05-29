import React from 'react';

export default function Stories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">Short Stories</h1>
            <p className="mt-2 text-gray-600 animate-fade-in delay-100">Read comforting tales to lift your spirits.</p>
          </div>
          <nav className="flex gap-6">
            <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Home</a>
            <a href="/stories" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Stories</a>
            <a href="/gallery" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Gallery</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 animate-fade-in delay-200">All Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-300">
              <h3 className="text-xl font-medium text-gray-900">The Kind Little Bird</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A small bird helps a friend in need with a simple act of kindness.</p>
              <a href="/stories/1" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</a>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-400">
              <h3 className="text-xl font-medium text-gray-900">Sunny Meadow Dreams</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A peaceful day in a magical meadow brings unexpected joy.</p>
              <a href="/stories/2" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</a>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-500">
              <h3 className="text-xl font-medium text-gray-900">The Lost Star</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A tiny star finds its way home with the help of new friends.</p>
              <a href="/stories/3" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</a>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-600">
              <h3 className="text-xl font-medium text-gray-900">The Gentle Wave</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A wave learns the power of calmness on a stormy day.</p>
              <a href="/stories/4" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</a>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-700">
              <h3 className="text-xl font-medium text-gray-900">A Cozy Blanket Tale</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">A magical blanket brings warmth to everyone it touches.</p>
              <a href="/stories/5" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors">Read more</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 animate-fade-in delay-800">
          <p>© 2025 Healing Moments. Wishing you a speedy recovery.</p>
        </div>
      </footer>
    </div>
  );
}
