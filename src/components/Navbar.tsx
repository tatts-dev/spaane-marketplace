
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
          <span className="text-xl font-bold ml-2 text-spaane-black">SPAANE CONNECT</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/browse" className="text-gray-700 hover:text-spaane-green">Browse Jobs</Link>
          <Link to="/about" className="text-gray-700 hover:text-spaane-green">How It Works</Link>
          <Link to="/contact" className="text-gray-700 hover:text-spaane-green">Contact</Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link to="/login">
            <Button variant="outline" className="border-spaane-green text-spaane-green hover:bg-spaane-light">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-spaane-green hover:bg-spaane-dark text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
