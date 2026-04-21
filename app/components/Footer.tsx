import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-xl font-bold text-primary-600">Fenty Beauty</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fenty Beauty is a customizable makeup platform that allows customers to design their own lipstick and blush products by choosing casing colors and engraving options.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">About</Link></li>
              <li><Link href="/testimonials" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Testimonials</Link></li>
              <li><Link href="/faqs" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Contact</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:18005553368" className="text-gray-600 hover:text-primary-600 transition-colors text-sm flex items-center font-medium">
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  1-800-555-FENT
                </a>
              </li>
              <li>
                <a href="mailto:support@fentybeauty.space" className="text-gray-600 hover:text-primary-600 transition-colors text-sm flex items-center font-medium">
                  <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  support@fentybeauty.space
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-50 text-gray-600 border border-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 shadow-sm" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 text-gray-600 border border-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 shadow-sm" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 text-gray-600 border border-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 shadow-sm" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.74 5.48-1.56 1.95-4.04 3.06-6.49 2.87-2.52-.2-4.93-1.62-5.98-3.95-1.07-2.39-.77-5.27.75-7.39 1.5-2.09 3.98-3.21 6.52-2.9v4.04c-1.39-.12-2.83.33-3.77 1.34-1.1 1.17-1.35 2.94-.65 4.38.68 1.45 2.37 2.29 3.93 2.1 1.63-.2 2.91-1.62 3.03-3.26V.02h.3z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-100 pt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-500 font-medium">© 2026 Fenty Beauty. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
             <span className="text-sm text-gray-400">Designed with ❤️ for all shades</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
