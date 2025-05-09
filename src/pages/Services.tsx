
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Scissors, Palette, Sparkles, Nail, ActivitySquare, Scissors as ScissorsIcon } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Hair Styling & Color",
      description: "Premium hair styling, coloring, and treatments by our expert stylists.",
      price: "₹599 onwards",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      icon: <Scissors size={20} className="text-brand-pink" />,
      link: "/services"
    },
    {
      title: "Bridal Makeup",
      description: "Stunning bridal packages that will make you glow on your special day.",
      price: "₹4,999 onwards",
      image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      icon: <Palette size={20} className="text-brand-pink" />,
      link: "/services"
    },
    {
      title: "Facials & Skincare",
      description: "Rejuvenate your skin with our premium facial and skincare treatments.",
      price: "₹799 onwards",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2lhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      icon: <Sparkles size={20} className="text-brand-pink" />,
      link: "/services"
    },
    {
      title: "Nail Art & Extensions",
      description: "Express yourself with our creative nail art designs and extensions.",
      price: "₹999 onwards",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFpbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      icon: <Nail size={20} className="text-brand-pink" />,
      link: "/services"
    },
    {
      title: "Body Spa & Massage",
      description: "Relax and rejuvenate with our luxurious spa treatments and massages.",
      price: "₹1,299 onwards",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      icon: <ActivitySquare size={20} className="text-brand-pink" />,
      link: "/services"
    },
    {
      title: "Eyebrows & Waxing",
      description: "Perfect your look with our eyebrow shaping and waxing services.",
      price: "₹149 onwards",
      image: "https://images.unsplash.com/photo-1594532231144-9072151fb499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXllYnJvd3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      icon: <ScissorsIcon size={20} className="text-brand-pink" />,
      link: "/services"
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-brand-pink">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Our Services & Pricing</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty.
          </p>
          <Link to="/book">
            <Button className="bg-white text-brand-pink hover:bg-white/90">
              Book Now
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-full -mb-32 -mr-32"></div>
          <div className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full -mt-32 -ml-32"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-700 mb-4">Want to see our complete list of services and prices?</p>
            <Button variant="outline" className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white">
              <Download size={16} className="mr-2" />
              Download Rate Card
            </Button>
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Special Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Save more with our curated beauty packages designed for different occasions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
              <div className="mb-4">
                <span className="inline-block bg-brand-pink/10 text-brand-pink px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-serif mb-2">Bridal Bliss Package</h3>
              <p className="text-gray-600 mb-4">Complete pre-wedding beauty routine including facials, hair treatments, and makeup trials.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  3 Pre-bridal facials
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  Hair spa and styling
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  2 Makeup trials
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  Complete waxing
                </li>
              </ul>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-gray-500 text-sm line-through">₹12,999</span>
                  <p className="text-xl font-medium text-brand-pink">₹9,999</p>
                </div>
                <Link to="/book">
                  <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                    Book Package
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-serif mb-2">Glow & Refresh Package</h3>
              <p className="text-gray-600 mb-4">Complete rejuvenation with our most popular treatments combined.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  Aromatherapy facial
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  Hair spa treatment
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  Manicure & pedicure
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  Threading & waxing
                </li>
              </ul>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-gray-500 text-sm line-through">₹3,999</span>
                  <p className="text-xl font-medium text-brand-pink">₹2,999</p>
                </div>
                <Link to="/book">
                  <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                    Book Package
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Ready to Experience Lavanya Luxe?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Book your appointment today and let our experts take care of your beauty needs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/book">
              <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
