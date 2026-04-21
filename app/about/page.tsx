import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-600 mr-8">
                Fenty Beauty
              </span>
              <div className="hidden sm:flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link href="/products" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Products</Link>
                <Link href="/about" className="text-primary-600 border-b-2 border-primary-600 px-3 py-2 text-sm font-medium transition-colors">About</Link>
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

      {/* Hero Section */}
      <section className="relative bg-primary-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
            Design Your Own <span className="text-primary-600">Beauty</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fenty Beauty is a customizable makeup platform where you can personalize your cosmetics. Express your unique style by designing your own lipstick and blush products, choosing everything from shades to custom engravings.
          </p>
        </div>
        {/* Decorative background element */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-[500px] bg-primary-100 rounded-3xl relative overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white ring-1 ring-gray-100">
                 {/* Placeholder for an inspiring brand image */}
                 <div className="text-primary-300 text-9xl">✨</div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent mix-blend-multiply" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-gold-500">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Created by Ayesha Shahid, Fenty Beauty was born from the desire to give everyone the ability to design their own makeup products. We believe that cosmetics shouldn't just be something you wear, but something you create.
                </p>
                <p>
                  Our goal is to build a platform where customers can effortlessly express their personal style. By letting you personalize your lipstick and blush products with different casing colors and engravings, we give you the tools to make your makeup truly yours.
                </p>
              </div>
              <div className="pt-4">
                <blockquote className="border-l-4 border-primary-500 pl-6 italic text-xl text-gray-800 font-medium">
                  "True expression comes when you have the power to create. Makeup should be as unique as the person wearing it."
                  <footer className="mt-2 text-gold-600 text-base font-bold not-italic">— Ayesha Shahid, Founder</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Power of <span className="text-primary-600">Personalization</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We know that true inclusion goes beyond just shade ranges. That's why we're bringing you the ultimate custom Fenty Beauty experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Perfect Shade</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from our expertly formulated, universally flattering colors, designed to look incredible on every skin tone.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                💎
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Casings</h3>
              <p className="text-gray-600 leading-relaxed">
                Elevate your makeup bag with our ultra-luxe custom cases, featuring distinct finishes that make your products uniquely yours.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                ✍️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Make It Yours</h3>
              <p className="text-gray-600 leading-relaxed">
                Add a custom engraving to your favorite products. Perfect for gifting, or just reminding yourself how bad you are every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to create your custom look?</h2>
          <Link
            href="/products"
            className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1"
          >
            Start Designing
          </Link>
        </div>
      </section>

    </main>
  );
}
