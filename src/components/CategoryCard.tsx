
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  jobCount: number;
  link: string;
  isActive?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  jobCount,
  link,
  isActive = false
}) => {
  return (
    <Link to={link}>
      <div 
        className={`
          rounded-lg p-6 shadow-md transition-all hover:shadow-xl cursor-pointer
          ${isActive ? 'bg-black text-white' : 'bg-white text-black'}
        `}
      >
        <div className="flex flex-col items-center text-center">
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
