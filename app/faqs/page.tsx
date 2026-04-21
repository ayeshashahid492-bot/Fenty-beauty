"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function FAQsPage() {
  const faqs = [
    {
      question: "How do I customize my makeup product?",
      answer: "Customizing your makeup is easy! Simply visit our Products page, select the item you'd like to personalize, and choose your preferred shade and casing color. You can also add a custom engraving before adding the item to your bag."
    },
    {
      question: "Can I engrave my name on the product?",
      answer: "Yes! We offer custom engraving up to 15 characters on all of our personalized lipstick and blush cases. It's the perfect way to make your Fenty Beauty product uniquely yours."
    },
    {
      question: "How long does customization take?",
      answer: "Once your order is placed, our team begins crafting your custom product. The customization process typically takes 2-3 business days. After that, standard shipping times apply based on your location."
    },
    {
      question: "Can I choose different casing colors?",
      answer: "Absolutely. Depending on the product, we offer a range of premium casing options, including exclusive gold, silver, and matte black finishes. You can select your preferred casing during the customization step."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, Fenty Beauty ships worldwide! International shipping times and rates vary by destination. You can view all shipping costs and estimated delivery times at checkout before placing your order."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                <Link href="/faqs" className="text-primary-600 border-b-2 border-primary-600 px-3 py-2 text-sm font-medium transition-colors">FAQs</Link>
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
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about designing your customized Fenty Beauty products.
          </p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-1">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border ${openIndex === index ? 'border-primary-200 shadow-md ring-1 ring-primary-100' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <h3 className={`text-xl font-bold pr-8 transition-colors ${openIndex === index ? 'text-primary-600' : 'text-gray-900'}`}>
                  {faq.question}
                </h3>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary-100 text-primary-600 rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-lg text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary-50 py-16 border-t border-primary-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-lg text-gray-600 mb-8">Our customer support team is here to help you.</p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-full text-lg font-bold transition-all shadow-md hover:shadow-primary-500/40 hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
