
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-intern-purple">Intern<span className="text-intern-blue">Route</span></span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-intern-purple">
              Home
            </Link>
            <Link to="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-intern-purple">
              Blog
            </Link>
            <Link to="/roadmap-selection" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-intern-purple">
              Roadmap
            </Link>
            <Link to="/internships" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-intern-purple">
              Internships
            </Link>
          </div>
          <div className="flex items-center">
            <Button 
              variant="default" 
              className="bg-intern-purple hover:bg-intern-purple-dark"
              onClick={() => navigate('/roadmap-selection')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
