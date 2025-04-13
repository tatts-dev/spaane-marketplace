
import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Zap, 
  Wrench, 
  Hammer, 
  Flame, 
  CheckCircle, 
  Upload, 
  User,
  FileText,
  Shield
} from 'lucide-react';
import Logo from './Logo';

const slides = [
  {
    title: "WELCOME TO SPAANE MARKETPLACE",
    description: "Solving Your Problem & Outsourcing Professionals At An Affordable Price",
    buttonText: "Sign Up As A Client",
    buttonLink: "/client/signup",
    backgroundColor: "bg-spaane-green",
    children: (
      <div className="text-center">
        <Logo />
        <div className="mt-8 flex justify-center space-x-4">
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-spaane-black border-2 border-spaane-black px-8 py-6 text-lg rounded-full">
            CLIENT
          </Button>
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-spaane-black border-2 border-spaane-black px-8 py-6 text-lg rounded-full">
            FREELANCER
          </Button>
        </div>
      </div>
    )
  },
  {
    title: "Browse the Job by Category",
    subtitle: "outsourcing critical skills, by professionals",
    description: "professionals to aid your everyday problems",
    backgroundColor: "bg-spaane-green",
    children: (
      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md transition-all hover:shadow-xl">
          <Zap size={36} className="mb-2 text-spaane-black" />
          <h3 className="text-xl font-semibold mb-1">Electrician</h3>
          <p className="text-gray-500 text-sm">68 Jobs Available</p>
          <div className="mt-2 text-spaane-green">&gt;&gt;</div>
        </div>
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md transition-all hover:shadow-xl">
          <Wrench size={36} className="mb-2 text-spaane-black" />
          <h3 className="text-xl font-semibold mb-1">Plumber</h3>
          <p className="text-gray-500 text-sm">120 Jobs Available</p>
          <div className="mt-2 text-spaane-green">&gt;&gt;</div>
        </div>
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md transition-all hover:shadow-xl">
          <Hammer size={36} className="mb-2 text-spaane-black" />
          <h3 className="text-xl font-semibold mb-1">Carpenter</h3>
          <p className="text-gray-500 text-sm">120 Jobs Available</p>
          <div className="mt-2 text-spaane-green">&gt;&gt;</div>
        </div>
        <div className="bg-black text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md transition-all hover:shadow-xl">
          <Flame size={36} className="mb-2 text-white" />
          <h3 className="text-xl font-semibold mb-1">Welding</h3>
          <p className="text-gray-300 text-sm">120 Jobs Available</p>
          <div className="mt-2 text-spaane-green">&gt;&gt;</div>
        </div>
      </div>
    )
  },
  {
    title: "Qualified Freelancer looking for work? Get Your Matched Jobs In a Few Minutes",
    description: "Sign-up & help within your community",
    buttonText: "Upload CV",
    buttonLink: "/freelancer/signup",
    backgroundColor: "bg-spaane-dark",
    image: "/lovable-uploads/977c54db-15a2-4f0f-84d7-0a87561f5bea.png"
  },
  {
    title: "Have an issue at home or in your area that needs repair? Connect with a qualified professional in house to handle it!",
    description: "",
    buttonText: "Post Job",
    buttonLink: "/post-job",
    buttonIcon: <ArrowRight className="ml-2" />,
    backgroundColor: "bg-spaane-black",
    image: "/lovable-uploads/5e850723-4099-403e-a8d1-4fa0e4b1e4bd.png",
    children: (
      <div className="mt-4 text-white">
        <div className="flex items-center mb-2">
          <CheckCircle size={16} className="text-blue-500 mr-2" />
          <p>Seamless Searching</p>
        </div>
        <div className="flex items-center">
          <CheckCircle size={16} className="text-blue-500 mr-2" />
          <p>Protected Payments System</p>
        </div>
      </div>
    )
  },
  {
    title: "How It Works?",
    backgroundColor: "bg-spaane-green",
    children: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col items-center text-center text-white">
          <div className="bg-black rounded-full p-4 mb-4">
            <User size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Account</h3>
          <p>It's very easy to open an account</p>
        </div>
        <div className="flex flex-col items-center text-center text-white">
          <div className="bg-black rounded-full p-4 mb-4">
            <FileText size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
          <p>Complete your profile with all required documention</p>
        </div>
        <div className="flex flex-col items-center text-center text-white">
          <div className="bg-black rounded-full p-4 mb-4">
            <Shield size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Apply Job Or Hire</h3>
          <p>Apply & get your preferable jobs with all the requirements and get it.</p>
        </div>
      </div>
    )
  }
];

const HomeCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.carousel-button-next, .carousel-button-prev');
    
    buttons.forEach(button => {
      if (button.classList.contains('carousel-button-next')) {
        button.addEventListener('click', nextSlide);
      } else {
        button.addEventListener('click', prevSlide);
      }
    });

    return () => {
      buttons.forEach(button => {
        if (button.classList.contains('carousel-button-next')) {
          button.removeEventListener('click', nextSlide);
        } else {
          button.removeEventListener('click', prevSlide);
        }
      });
    };
  }, []);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-wrapper" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <CarouselSlide
              slideNumber={index + 1}
              title={slide.title}
              subtitle={slide.subtitle}
              description={slide.description}
              image={slide.image}
              buttonText={slide.buttonText}
              buttonLink={slide.buttonLink}
              backgroundColor={slide.backgroundColor}
              totalSlides={slides.length}
              buttonIcon={slide.buttonIcon}
            >
              {slide.children}
            </CarouselSlide>
          </div>
        ))}
      </div>
      
      <div className="carousel-dots absolute bottom-4 left-0 right-0">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
