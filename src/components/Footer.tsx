
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-intern-purple">Intern<span className="text-intern-blue">Route</span></span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Helping Tier-3 college students navigate the path to successful tech internships through personalized learning roadmaps.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/roadmap-selection" className="text-gray-600 hover:text-intern-purple">Learning Paths</Link></li>
              <li><Link to="/internships" className="text-gray-600 hover:text-intern-purple">Internship Listings</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-intern-purple">Blog</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-intern-purple">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-intern-purple">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-intern-purple">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-intern-purple">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-intern-purple">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} InternRoute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
