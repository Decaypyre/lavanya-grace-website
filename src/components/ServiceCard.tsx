
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
  icon,
  link
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image if the original fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60";
  
  return (
    <div className="service-card group">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <img
          src={imageError ? fallbackImage : image}
          alt={title}
          className="service-image w-full h-full object-cover transition-transform duration-700"
          onError={() => setImageError(true)}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full z-20">
          {icon}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-serif font-semibold">{title}</h3>
          <span className="text-brand-pink font-medium">{price}</span>
        </div>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="mt-4">
          <Link to={link}>
            <Button variant="outline" className="w-full border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white transition-colors">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
