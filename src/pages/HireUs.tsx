
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const HireUsPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request sent successfully!",
        description: "We'll contact you shortly to discuss your event requirements.",
      });
      
      // Reset form
      setName('');
      setPhone('');
      setEmail('');
      setEventType('');
      setEventDate('');
      setGuestCount('');
      setEventLocation('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-brand-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1607461153457-d6a86a6e8d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJpZGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=2000&q=80" 
            alt="Lavanya Luxe Event Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Hire Us For Your Event</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Let our professional team take care of beauty needs for your special event, wedding, or corporate function.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-serif mb-4">Our Event Services</h2>
              <p className="text-gray-700">
                At Lavanya Luxe, we offer premium beauty and styling services for events of all sizes. Our professional team can handle individual styling or provide services for your entire group.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h3 className="font-serif text-lg mb-3">Wedding Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Bridal makeup & hair
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Bridesmaid styling
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Family makeup packages
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Pre-wedding treatments
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h3 className="font-serif text-lg mb-3">Corporate Events</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Team styling sessions
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Executive makeup
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Quick touch-up stations
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                      Group packages
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-brand-pink/5 rounded-lg p-6 border border-brand-pink/20 mt-8">
                <h3 className="font-serif text-lg mb-3">Why Choose Us For Your Event</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Professional team with experience in handling events of all sizes</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Premium products and equipment for the best results</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Customized packages to suit your specific requirements</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-pink text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">On-site services available at your venue</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-serif mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Phone Number"
                      type="tel"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    type="email"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="text-sm font-medium">
                      Event Type
                    </label>
                    <Input
                      id="eventType"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      placeholder="Wedding, Corporate Event, etc."
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="eventDate" className="text-sm font-medium">
                      Event Date
                    </label>
                    <Input
                      id="eventDate"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      placeholder="DD/MM/YYYY"
                      type="date"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="guestCount" className="text-sm font-medium">
                      Number of People
                    </label>
                    <Input
                      id="guestCount"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder="How many require services?"
                      type="number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="eventLocation" className="text-sm font-medium">
                      Event Location
                    </label>
                    <Input
                      id="eventLocation"
                      value={eventLocation}
                      onChange={(e) => setEventLocation(e.target.value)}
                      placeholder="City or Venue"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Requirements
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us more about your event and requirements"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Quote"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of clients who hired our team for their events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-pink">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Priya Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Bride</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The Lavanya Luxe team was incredible for my wedding! They handled makeup for me, my 6 bridesmaids, and both mothers with ease. Everyone looked stunning and the makeup lasted all day and night!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-pink">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Neha Kapoor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Neha Kapoor</h4>
                  <p className="text-sm text-gray-600">Event Manager</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We hired Lavanya Luxe for our company's annual gala. Their team set up a styling station that our team members loved. Very professional and accommodating!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-pink">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Arti Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Arti Gupta</h4>
                  <p className="text-sm text-gray-600">Mother of the Bride</p>
                </div>
              </div>
              <p className="text-gray-700">
                "For my daughter's wedding, we had Lavanya Luxe handle beauty services for the entire family. They were punctual, professional, and made everyone look their absolute best!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireUsPage;
