import Link from 'next/link';

export default function PrivacyPage() {
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
            Privacy <span className="text-primary-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how Fenty Beauty collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-8 leading-relaxed">
              At Fenty Beauty, we take your privacy and the security of your personal data very seriously. 
              This Privacy Policy outlines the types of information we collect when you use our website, 
              how it is stored, and how we use it to provide you with the best possible custom beauty experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Information We Collect</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Google Analytics 4 Data Collection</h3>
            <p className="mb-4 leading-relaxed">
              To understand how visitors interact with our website and to improve our user experience, we use Google Analytics 4. 
              This service collects anonymized data, which includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Page views and navigation paths</li>
              <li>Session duration</li>
              <li>Device type and browser information</li>
              <li>Approximate location data</li>
              <li>Cookies used by Google Analytics</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">User Account Information</h3>
            <p className="mb-4 leading-relaxed">
              When you sign up for an account with Fenty Beauty, we collect personal information explicitly provided by you during signup, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>First name</li>
              <li>Last name</li>
              <li>Email address</li>
              <li>A password, which is stored securely using industry-standard hashing protocols</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Database Information</h3>
            <p className="mb-4 leading-relaxed">
              To operate our Fenty Beauty business and fulfill your orders, we also store operational activity on our secure databases, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Customer profile records</li>
              <li>Product purchase history</li>
              <li>Your custom beauty shade information and engraving details</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">How We Use Your Information</h2>
            <p className="mb-6 leading-relaxed">
              The data we collect is utilized strictly to provide, protect, and improve our services. Specifically, we use your information for:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Account creation:</strong> Setting up and managing your user profile.</li>
              <li><strong>Improving the website:</strong> Making data-driven improvements to site performance, design, and usability based on analytics.</li>
              <li><strong>Tracking trends:</strong> Identifying popular beauty products and popular custom shades to expand our offerings.</li>
              <li><strong>Communication:</strong> Sending welcome emails, order updates, and service notifications.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Cookies Policy</h2>
            <p className="mb-6 leading-relaxed">
              Our website uses cookies to function properly and to facilitate tracking through Google Analytics. Google Analytics uses cookies 
              to recognize your browser or device so we can measure site traffic and engagement. You have the right to disable cookies at any time 
              by adjusting the settings in your web browser. Please note that disabling cookies may affect certain functionality on our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Your Rights</h2>
            <p className="mb-6 leading-relaxed">
              You maintain control over your personal data. As a Fenty Beauty customer, you are entitled to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Request access:</strong> You can ask us for copies of your personal data at any time.</li>
              <li><strong>Correct your data:</strong> You can ask us to rectify any account information that you believe is inaccurate.</li>
              <li><strong>Request deletion:</strong> You have the right to request the permanent deletion of your data and account from our servers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Legal Compliance</h2>
            <p className="mb-6 leading-relaxed">
              Fenty Beauty conducts business ethically and in full compliance with major regional privacy frameworks. We adhere to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>PIPEDA</strong> (Personal Information Protection and Electronic Documents Act) for Canadian privacy requirements.</li>
              <li><strong>GDPR</strong> (General Data Protection Regulation) for protecting and respecting the privacy of our users based in the European Union.</li>
              <li><strong>CASL</strong> (Canada's Anti-Spam Legislation) ensuring that your consent is collected prior to sending you marketing communications.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              If you have any requests, questions, or concerns about this Privacy Policy or how your personal information is handled, 
              please reach out to our dedicated privacy team at:{' '}
              <a href="mailto:privacy@fentybeauty.com" className="text-primary-600 hover:text-primary-700 font-medium">
                privacy@fentybeauty.com
              </a>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
