
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeCarousel from '@/components/HomeCarousel';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
