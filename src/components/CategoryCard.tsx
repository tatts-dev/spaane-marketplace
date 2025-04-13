
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  jobCount: number;
  link: string;
  isActive?: boolean;
  image?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  jobCount,
  link,
  isActive = false,
  image
}) => {
  return (
    <Link to={link}>
      <div 
        className={`
          rounded-lg p-6 shadow-md transition-all hover:shadow-xl cursor-pointer h-full
          ${isActive ? 'bg-black text-white' : 'bg-white text-black'}
          relative overflow-hidden
        `}
      >
        {image && (
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${isActive ? 'bg-black' : 'bg-white'} opacity-30`}></div>
          </div>
        )}
        
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
            {jobCount} Jobs Available
          </p>
          <div className="mt-4 text-spaane-green">&gt;&gt;</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
