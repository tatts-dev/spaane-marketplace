
import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';
import Logo from './Logo';

const slides = [
  {
    title: "WELCOME TO SPAANE MARKETPLACE",
    description: "Solving Your Problem & Outsourcing Professionals At An Affordable Price",
    buttonText: "Sign Up As A Client",
    buttonLink: "/client/signup",
    backgroundColor: "bg-spaane-green",
    // Add empty strings for the optional properties to avoid TypeScript errors
    subtitle: "",
    image: "",
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
    title: "Connect with qualified professionals to handle your repairs and maintenance",
    description: "Find skilled workers in your area quickly and easily",
    buttonText: "Browse Jobs",
    buttonLink: "/browse",
    buttonIcon: <ArrowRight className="ml-2" />,
    backgroundColor: "bg-spaane-dark",
    // Add empty strings for the optional properties to avoid TypeScript errors
    subtitle: "",
    image: "",
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
    
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
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

    // Add wheel event listener for mouse scroll
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
      carouselContainer.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      });
    }

    return () => {
      buttons.forEach(button => {
        if (button.classList.contains('carousel-button-next')) {
          button.removeEventListener('click', nextSlide);
        } else {
          button.removeEventListener('click', prevSlide);
        }
      });
      
      if (carouselContainer) {
        carouselContainer.removeEventListener('wheel', nextSlide);
      }
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
