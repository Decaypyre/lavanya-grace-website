
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Scissors, Palette, Sparkles, MessageSquare } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';

const Home = () => {
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
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Regular Client",
      content: "The bridal makeup was absolutely stunning! Everyone at my wedding was asking about who did my makeup. Truly exceptional service.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Meera Patel",
      position: "Bridal Client",
      content: "The hair stylists at Lavanya Luxe are the best in town! They really understand what style suits your face shape and personality.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Neha Singh",
      position: "Client",
      content: "The spa treatments are truly relaxing and rejuvenating. Their attention to detail and personalized service makes every visit special.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Lavanya Luxe Beauty Salon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold mb-6">
            Elegance. Grace. You.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Where tradition meets modern beauty
          </p>
          <Link to="/book">
            <Button className="btn-shimmer text-white py-6 px-8 rounded-md text-lg shadow-lg group">
              Book Your Glow
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Welcome to <span className="lavanya text-brand-pink">Lavanya</span> <span className="luxe">Luxe</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Lavanya Luxe is a premium beauty salon in Sector 15, offering a unique blend of traditional beauty practices and modern luxury services. We believe in graceful self-care through personalized experiences.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/gallery">
                <Button variant="outline" className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white">
                  View Our Gallery
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best of luxury beauty treatments designed to enhance your natural beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">
                View All Services
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Lavanya Luxe Salon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Experience Beauty Like Never Before
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Book an appointment today and let our expert stylists and beauticians transform your look.
            </p>
            <Link to="/book">
              <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white py-6 px-8 rounded-md text-lg shadow-lg">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Client Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what our clients say about their experiences at Lavanya Luxe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-brand-pink text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif mb-2">Have Questions?</h3>
              <p className="text-white/90">We're here to help you with any inquiries.</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-pink">
                  Contact Us
                </Button>
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-brand-pink hover:bg-white/90">
                  <MessageSquare className="mr-2" size={18} />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
