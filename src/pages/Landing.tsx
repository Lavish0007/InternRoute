
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <div className="flex-grow">
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Internship Journey?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Create your personalized roadmap today and take the first step toward your dream tech career.
              </p>
              <div className="flex justify-center">
                <a
                  href="/form"
                  className="bg-intern-purple text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-intern-purple-dark transition-colors"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
