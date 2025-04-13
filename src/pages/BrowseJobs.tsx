
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { 
  Zap, 
  Wrench, 
  Hammer, 
  Flame, 
  Scissors, 
  Paintbrush, 
  Droplets, 
  Fan 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  { 
    icon: <Zap size={32} />, 
    title: 'Electrician', 
    jobCount: 68,
    link: '/browse/electrician',
    image: '/lovable-uploads/efe8c963-eb85-4d60-9a86-039e6cca819d.png'
  },
  { 
    icon: <Wrench size={32} />, 
    title: 'Plumber', 
    jobCount: 120,
    link: '/browse/plumber',
    image: '/lovable-uploads/3b106bdb-7e02-457e-94c1-2a4bb70de4cc.png'
  },
  { 
    icon: <Hammer size={32} />, 
    title: 'Carpenter', 
    jobCount: 120,
    link: '/browse/carpenter',
    image: '/lovable-uploads/d0165431-48b3-4f95-a5af-9ae80b6f3ca8.png'
  },
  { 
    icon: <Flame size={32} />, 
    title: 'Welding', 
    jobCount: 120,
    link: '/browse/welding',
    isActive: true,
    image: '/lovable-uploads/e1cdb9b7-e6b9-46aa-b915-595e48156252.png'
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
    link: '/browse/hvac',
    image: '/lovable-uploads/8cf6b128-8642-4f8a-9d41-8831be92719f.png'
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
                image={category.image}
              />
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Popular Jobs in Pretoria</h2>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">Electrical Wiring Repair</h3>
                          <p className="text-gray-600 text-sm mt-1">Posted 3 days ago • Pretoria East</p>
                          <div className="flex mt-2">
                            <Badge variant="secondary" className="bg-spaane-light text-spaane-green mr-2">
                              Electrician
                            </Badge>
                            <Badge variant="outline">
                              Urgent
                            </Badge>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrowseJobs;
