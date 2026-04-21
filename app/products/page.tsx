"use client";

import Link from 'next/link';
import { useState } from 'react';

// Product Data
const products = [
  {
    id: 1,
    name: 'Mattemoiselle Plush Matte Lipstick',
    description: 'An ultra-slim lipstick with a long-wearing, petal-soft matte finish, created in a rainbow of weightless, color-intense shades designed to flatter all skin tones.',
    price: '$22.00',
    type: 'Lipstick',
    colors: [
      { name: 'Spanked', hex: '#b55e64' },
      { name: 'Ma\'damn', hex: '#b31526' },
      { name: 'Griselda', hex: '#581622' },
      { name: 'Candy Venom', hex: '#d1246c' },
    ],
    image: '💄',
  },
  {
    id: 2,
    name: 'Cheeks Out Freestyle Cream Blush',
    description: 'A light-as-air, non-greasy cream blush that instantly melts into skin for an effortless wash of color, giving life to all skin tones with a no-fuss, natural-looking flush.',
    price: '$24.00',
    type: 'Blush',
    colors: [
      { name: 'Petal Poppin', hex: '#f09faa' },
      { name: 'Summertime Wine', hex: '#a64455' },
      { name: 'Crush on Cupid', hex: '#db5177' },
      { name: 'Fuego Flush', hex: '#e77b47' },
    ],
    image: '✨',
  }
];

export default function ProductsPage() {
  const [customizations, setCustomizations] = useState<{ [key: number]: { color: string, engraving: string } }>({});

  const handleColorSelect = (productId: number, colorName: string) => {
    setCustomizations(prev => ({
      ...prev,
      [productId]: { ...prev[productId], color: colorName }
    }));
  };

  const handleEngravingChange = (productId: number, engraving: string) => {
    setCustomizations(prev => ({
      ...prev,
      [productId]: { ...prev[productId], engraving }
    }));
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-600 mr-8">
                Fenty Beauty
              </span>
              <div className="hidden sm:flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link href="/products" className="text-primary-600 border-b-2 border-primary-600 px-3 py-2 text-sm font-medium transition-colors">Products</Link>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</Link>
                <Link href="/faqs" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">FAQs</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Products Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Customizable <span className="text-primary-600">Products</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Design your perfect Fenty Beauty look. Choose your shade and add a personal touch with a custom engraving for a premium, unique finish.
        </p>
      </section>

      {/* Products Grid */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) => {
            const currentCustomization = customizations[product.id] || { color: '', engraving: '' };

            return (
              <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8 h-full flex flex-col">
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-sm font-bold text-gold-600 tracking-widest uppercase mb-2 block">{product.type}</div>
                      <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-2">{product.name}</h2>
                    </div>
                    <div className="text-5xl ml-4 drop-shadow-md">{product.image}</div>
                  </div>
                  
                  <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
                  <p className="text-gray-600 mb-8 flex-1 leading-relaxed">{product.description}</p>

                  <div className="space-y-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    {/* Color Customization */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="block text-sm font-bold text-gray-900 uppercase tracking-wide">
                          1. Select Shade
                        </label>
                        {currentCustomization.color && (
                          <span className="text-primary-600 font-semibold text-sm bg-primary-50 px-3 py-1 rounded-full">
                            {currentCustomization.color}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {product.colors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => handleColorSelect(product.id, color.name)}
                            className={`w-12 h-12 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                              currentCustomization.color === color.name ? 'border-primary-600 scale-110 shadow-lg ring-4 ring-primary-100' : 'border-gray-200 shadow-sm hover:border-gray-300'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                            aria-label={`Select ${color.name}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Engraving Customization */}
                    <div className="pt-6 border-t border-gray-200">
                      <label htmlFor={`engraving-${product.id}`} className="flex justify-between items-center block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        <span>2. Custom Engraving</span>
                        <span className="text-gray-500 font-normal text-xs normal-case">{currentCustomization.engraving.length}/15</span>
                      </label>
                      <input
                        type="text"
                        id={`engraving-${product.id}`}
                        maxLength={15}
                        placeholder="e.g. BAD GAL"
                        value={currentCustomization.engraving}
                        onChange={(e) => handleEngravingChange(product.id, e.target.value)}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow text-gray-900 font-medium placeholder-gray-400"
                      />
                    </div>

                    <button 
                      className={`w-full py-4 rounded-xl text-lg font-bold transition-all duration-300 mt-2 shadow-lg flex justify-center items-center space-x-2 ${
                        currentCustomization.color 
                          ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-primary-500/30' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                      }`}
                      disabled={!currentCustomization.color}
                    >
                      <span>{currentCustomization.color ? 'Add to Bag' : 'Select a Shade to Continue'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
