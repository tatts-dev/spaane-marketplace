
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spaane-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Logo />
              <span className="text-xl font-bold ml-2">Spaane</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting qualified professionals with clients in Pretoria.
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
            <h3 className="text-lg font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2">
              <li><Link to="/freelancer/signup" className="text-gray-300 hover:text-white">Sign Up as Freelancer</Link></li>
              <li><Link to="/freelancer/dashboard" className="text-gray-300 hover:text-white">Freelancer Dashboard</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Subscription Plans</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li><Link to="/client/signup" className="text-gray-300 hover:text-white">Sign Up as Client</Link></li>
              <li><Link to="/client/dashboard" className="text-gray-300 hover:text-white">Client Dashboard</Link></li>
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
