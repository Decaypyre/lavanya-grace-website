
import { GalleryItem } from '@/components/gallery/GalleryGrid';
import { Testimonial } from '@/components/gallery/TestimonialsSection';

export const filters = [
  { id: "all", label: "All Photos" },
  { id: "salon", label: "Salon" },
  { id: "hair", label: "Hair" },
  { id: "makeup", label: "Makeup" },
  { id: "nails", label: "Nails" },
  { id: "bridal", label: "Bridal" }
];

export const galleryItems: GalleryItem[] = [
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
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhaXIlMjBhZnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Hair Styling Session",
    category: "hair"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV5ZWJyb3dzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    alt: "Eyebrow Shaping",
    category: "makeup"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMGNvbG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
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
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Nail Art Design",
    category: "nails"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1610992448550-aff9a2025ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuaWN1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Manicure Process",
    category: "nails"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
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

export const testimonials: Testimonial[] = [
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
