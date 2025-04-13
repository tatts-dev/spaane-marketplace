
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { Zap, Wrench, Hammer, Flame, Scissors, Paintbrush, Droplets, Fan } from 'lucide-react';

const categories = [
  { 
    icon: <Zap size={32} />, 
    title: 'Electrician', 
    jobCount: 68,
    link: '/browse/electrician'
  },
  { 
    icon: <Wrench size={32} />, 
    title: 'Plumber', 
    jobCount: 120,
    link: '/browse/plumber'
  },
  { 
    icon: <Hammer size={32} />, 
    title: 'Carpenter', 
    jobCount: 120,
    link: '/browse/carpenter'
  },
  { 
    icon: <Flame size={32} />, 
    title: 'Welding', 
    jobCount: 120,
    link: '/browse/welding',
    isActive: true
  },
  { 
    icon: <Scissors size={32} />, 
    title: 'Gardening', 
    jobCount: 85,
    link: '/browse/gardening'
  },
  { 
    icon: <Paintbrush size={32} />, 
    title: 'Painting', 
    jobCount: 92,
    link: '/browse/painting'
  },
  { 
    icon: <Droplets size={32} />, 
    title: 'Pool Cleaning', 
    jobCount: 45,
    link: '/browse/pool-cleaning'
  },
  { 
    icon: <Fan size={32} />, 
    title: 'HVAC', 
    jobCount: 38,
    link: '/browse/hvac'
  },
];

const BrowseJobs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Browse Jobs by Category</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find skilled professionals in various categories to help with your home repairs and maintenance needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                jobCount={category.jobCount}
                link={category.link}
                isActive={category.isActive}
              />
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Popular Jobs in Pretoria</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Electrical Wiring Repair</h3>
                        <p className="text-gray-600 text-sm mt-1">Posted 3 days ago • Pretoria East</p>
                        <div className="flex mt-2">
                          <span className="bg-spaane-light text-spaane-green text-xs px-2 py-1 rounded-full mr-2">
                            Electrician
                          </span>
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            Urgent
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg">R350-R500</span>
                        <p className="text-xs text-gray-500">Hourly Rate</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrowseJobs;
