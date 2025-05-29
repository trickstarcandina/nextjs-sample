import React from 'react';

export default function Gallery() {
  // Sample cat image data - in a real app, this could be fetched from a folder or API
  const images = [
    { id: 1, src: 'https://picsum.photos/300/300?random=1&category=cats', alt: 'Cute cat 1' },
    { id: 2, src: 'https://picsum.photos/300/300?random=2&category=cats', alt: 'Cute cat 2' },
    { id: 3, src: 'https://picsum.photos/300/300?random=3&category=cats', alt: 'Cute cat 3' },
    { id: 4, src: 'https://picsum.photos/300/300?random=4&category=cats', alt: 'Cute cat 4' },
    { id: 5, src: 'https://picsum.photos/300/300?random=5&category=cats', alt: 'Cute cat 5' },
    { id: 6, src: 'https://picsum.photos/300/300?random=6&category=cats', alt: 'Cute cat 6' },
    { id: 7, src: 'https://picsum.photos/300/300?random=7&category=cats', alt: 'Cute cat 7' },
    { id: 8, src: 'https://picsum.photos/300/300?random=8&category=cats', alt: 'Cute cat 8' },
    { id: 9, src: 'https://picsum.photos/300/300?random=9&category=cats', alt: 'Cute cat 9' },
    { id: 10, src: 'https://picsum.photos/300/300?random=10&category=cats', alt: 'Cute cat 10' },
    { id: 11, src: 'https://picsum.photos/300/300?random=11&category=cats', alt: 'Cute cat 11' },
    { id: 12, src: 'https://picsum.photos/300/300?random=12&category=cats', alt: 'Cute cat 12' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">Cute Image Gallery</h1>
            <p className="mt-2 text-gray-600 animate-fade-in delay-100">Brighten your day with these adorable pictures.</p>
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 animate-fade-in delay-200">All Images</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map(image => (
              <div key={image.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${300 + (image.id - 1) * 100}ms` }}>
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 animate-fade-in delay-1500">
          <p>© 2025 Healing Moments. Wishing you a speedy recovery.</p>
        </div>
      </footer>
    </div>
  );
}
