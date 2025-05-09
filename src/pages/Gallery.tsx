
import { useState } from 'react';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import TransformationsSection from '@/components/gallery/TransformationsSection';
import TestimonialsSection from '@/components/gallery/TestimonialsSection';
import { filters, galleryItems, testimonials } from '@/data/galleryData';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <GalleryHero />

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <GalleryFilter 
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Gallery Grid */}
          <GalleryGrid items={filteredItems} />
        </div>
      </section>

      {/* Before/After Section */}
      <TransformationsSection />

      {/* Client Testimonials */}
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
};

export default GalleryPage;
