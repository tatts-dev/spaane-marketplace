
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CarouselSlideProps {
  slideNumber: number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
  totalSlides: number;
  buttonIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slideNumber,
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  backgroundColor = 'bg-spaane-green',
  totalSlides,
  buttonIcon,
  children
}) => {
  return (
    <div className={`${backgroundColor} min-h-[80vh] flex flex-col justify-between w-full`}>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-0">
        <div className="w-full md:w-1/2 text-white space-y-6">
          {subtitle && <h3 className="text-xl font-medium">{subtitle}</h3>}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
          {description && <p className="text-lg md:text-xl">{description}</p>}
          
          {buttonText && buttonLink && (
            <div className="mt-8">
              <Link to={buttonLink}>
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-6 text-lg rounded-full">
                  {buttonText} {buttonIcon}
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          )}
          {children}
        </div>
      </div>
      
      <div className="px-6 py-8 flex justify-between items-center">
        <div className="text-5xl font-bold text-white opacity-80">
          {slideNumber.toString().padStart(2, '0')}
        </div>
        
        <div className="flex items-center">
          <span className="text-white mr-2">{slideNumber} / {totalSlides}</span>
          <div className="flex space-x-1">
            <button className="carousel-button-prev bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center text-white">
              &lt;
            </button>
            <button className="carousel-button-next bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center text-white">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
