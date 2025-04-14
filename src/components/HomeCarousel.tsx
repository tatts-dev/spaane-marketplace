import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import { ArrowRight } from 'lucide-react';

const slides = [
  // First slide - freelancer focus
  {
    title: "Qualified Freelancer looking for work? Get Your Matched Jobs In a Few Minutes",
    subtitle: "", // Added empty subtitle
    description: "Sign-up & help within your community",
    buttonText: "Sign Up As A Freelancer",
    buttonLink: "/signup", // Updated to general signup page
    backgroundColor: "bg-spaane-dark",
    image: "/lovable-uploads/homeelec.jpg"
  },
  // Second slide - client focus
  {
    title: "Have an issue at home or in your area that needs repair? Connect with a qualified professional in house to handle it!",
    subtitle: "", // Added empty subtitle
    description: "",
    buttonText: "Sign Up As A Client",
    buttonLink: "/signup", // Updated to general signup page
    buttonIcon: <ArrowRight className="ml-2" />,
    backgroundColor: "bg-spaane-black",
    image: "/lovable-uploads/homeroof.jpg",
  }
];

const HomeCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="relative w-full overflow-hidden">
        <div className="relative">
          <CarouselSlide
              slideNumber={currentSlide + 1}
              title={slides[currentSlide].title}
              subtitle={slides[currentSlide].subtitle}
              description={slides[currentSlide].description}
              image={slides[currentSlide].image}
              buttonText={slides[currentSlide].buttonText}
              buttonLink={slides[currentSlide].buttonLink}
              backgroundColor={slides[currentSlide].backgroundColor}
              totalSlides={slides.length}
              buttonIcon={slides[currentSlide].buttonIcon}
          >

          </CarouselSlide>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
              <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
              />
          ))}
        </div>
      </div>
  );
};

export default HomeCarousel;
