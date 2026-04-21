import Link from 'next/link';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah J.',
      review: 'I absolutely love my customized Mattemoiselle lipstick! Being able to choose the exact shade and have my name engraved on the casing makes it feel so luxurious and special. Highly recommend!',
      rating: 5,
      product: 'Mattemoiselle Plush Matte Lipstick',
    },
    {
      id: 2,
      name: 'Jessica W.',
      review: 'The Cheeks Out cream blush is already my favorite formula, but having it in a personalized gold case with my initials is everything. The site was so easy to use to design my perfect makeup!',
      rating: 5,
      product: 'Cheeks Out Freestyle Cream Blush',
    },
    {
      id: 3,
      name: 'Anika R.',
      review: 'Finally, makeup that truly feels like mine. I purchased a custom lipstick for my wedding day and it was the perfect personalized touch. The engraving quality is top tier. Love what Ayesha has created!',
      rating: 5,
      product: 'Mattemoiselle Plush Matte Lipstick',
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
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
                <Link href="/about" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
                <Link href="/testimonials" className="text-primary-600 border-b-2 border-primary-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</Link>
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

      {/* Header Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Customer <span className="text-primary-600">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their custom Fenty Beauty creations.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-1">
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <div className="flex text-gold-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">"{testimonial.review}"</p>
              <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
                {testimonial.product}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-16 border-t border-b border-primary-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to create your own signature look?</h2>
          <Link
            href="/products"
            className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-primary-500/40 hover:-translate-y-1"
          >
            Start Designing Today
          </Link>
        </div>
      </section>

    </main>
  );
}
