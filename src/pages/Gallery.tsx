
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import GalleryImage from '@/components/GalleryImage';
import TestimonialCard from '@/components/TestimonialCard';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filters = [
    { id: "all", label: "All Photos" },
    { id: "salon", label: "Salon" },
    { id: "hair", label: "Hair" },
    { id: "makeup", label: "Makeup" },
    { id: "nails", label: "Nails" },
    { id: "bridal", label: "Bridal" }
  ];
  
  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Lavanya Luxe Salon Interior",
      category: "salon"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1634449571010-02389ed7f361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Styling Station",
      category: "salon"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Hair Styling Session",
      category: "hair"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594532231144-9072151fb499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXllYnJvd3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Eyebrow Shaping",
      category: "makeup"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571291243306-40cfd8dfe8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBzdHlsaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      alt: "Hair Coloring Process",
      category: "hair"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      alt: "Bridal Makeup Session",
      category: "bridal"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFpbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Nail Art Design",
      category: "nails"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1522123434663-0565662246f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Manicure Process",
      category: "nails"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1581494017001-71ae9b3a8f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMGNvbG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      alt: "Hair Color Transformation",
      category: "hair"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      alt: "Bridal Makeup Look",
      category: "bridal"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2lhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Facial Treatment",
      category: "makeup"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb24lMjByZWNlcHRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Salon Reception Area",
      category: "salon"
    }
  ];
  
  const testimonials = [
    {
      name: "Priya Sharma",
      content: "The bridal makeup was absolutely stunning! Everyone at my wedding was asking about who did my makeup. Truly exceptional service.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Meera Patel",
      content: "The hair stylists at Lavanya Luxe are the best in town! They really understand what style suits your face shape and personality.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ];
  
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative py-16 bg-brand-black">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Our Gallery</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Explore our work and the transformations we create at Lavanya Luxe.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-brand-pink hover:bg-brand-pink/90 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <GalleryImage
                key={item.id}
                src={item.src}
                alt={item.alt}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif mb-4">Transformations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the amazing before and after results of our beauty treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="before-after-container">
              <h3 className="text-xl font-serif mb-4 text-center">Hair Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXIlMjBiZWZvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                      alt="Before Hair Treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-500 mt-2">Before</p>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhaXIlMjBhZnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                      alt="After Hair Treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-500 mt-2">After</p>
                </div>
              </div>
            </div>
            
            <div className="before-after-container">
              <h3 className="text-xl font-serif mb-4 text-center">Makeup Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMG5vJTIwbWFrZXVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                      alt="Before Makeup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-500 mt-2">Before</p>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                      alt="After Makeup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-500 mt-2">After</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our clients say about their experiences at Lavanya Luxe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
