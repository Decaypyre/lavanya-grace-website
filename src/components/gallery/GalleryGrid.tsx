
import GalleryImage from '@/components/GalleryImage';

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid = ({ items }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <GalleryImage
          key={item.id}
          src={item.src}
          alt={item.alt}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
