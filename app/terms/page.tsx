import Link from 'next/link';

export default function TermsPage() {
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

      {/* Header Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Terms of <span className="text-primary-600">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using Fenty Beauty.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-8 leading-relaxed">
              Welcome to Fenty Beauty. By using our website, creating an account,
              or purchasing our beauty products and custom shades, you agree to
              these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Our Service</h2>
            <p className="mb-6 leading-relaxed">
              Fenty Beauty is an online beauty store that allows customers to browse,
              purchase, and create customized beauty shades including lipstick and
              makeup products.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Acceptable Use</h2>
            <p className="mb-6 leading-relaxed">
              You may not use this website for unlawful activity, false account
              creation, abuse of other users, or attempts to interfere with the
              website or database.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Intellectual Property</h2>
            <p className="mb-6 leading-relaxed">
              All website content, branding, custom shade designs, text, graphics,
              and product descriptions belong to Fenty Beauty and may not be copied
              without permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Termination</h2>
            <p className="mb-6 leading-relaxed">
              We may suspend or remove accounts that violate these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Limitation of Liability</h2>
            <p className="mb-6 leading-relaxed">
              Fenty Beauty is not responsible for any damages resulting from use of
              the website, delays, technical issues, or misuse of products.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Privacy and Legal Compliance</h2>
            <p className="mb-6 leading-relaxed">
              Fenty Beauty follows Canadian privacy law under PIPEDA and may also
              comply with GDPR for customers located in the European Union. We also
              follow CASL for marketing emails sent to customers.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}