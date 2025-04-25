
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spaane-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Logo />
              <span className="text-xl font-bold ml-2">Spaane</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting qualified professionals with clients in need.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/browse" className="text-gray-300 hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">How It Works</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li><Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link></li>
              <li><Link to="/post-job" className="text-gray-300 hover:text-white">Post a Job</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Spaane Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
