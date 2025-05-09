
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryImageProps {
  src: string;
  alt: string;
  category?: string;
}

const GalleryImage = ({ src, alt, category }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="image-card relative rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-square overflow-hidden">
          <img 
            src={src} 
            alt={alt} 
            className="image-zoom w-full h-full object-cover transition-all duration-300"
          />
        </div>
        <div className="card-content absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white font-serif">{alt}</p>
          {category && (
            <span className="text-brand-pink text-sm">{category}</span>
          )}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative">
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <p className="text-white font-serif">{alt}</p>
              {category && (
                <span className="text-brand-pink text-sm">{category}</span>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;
