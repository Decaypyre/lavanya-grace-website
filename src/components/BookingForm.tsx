
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const services = [
  { id: 'hair', name: 'Hair Styling & Color' },
  { id: 'bridal', name: 'Bridal Makeup' },
  { id: 'facial', name: 'Facials & Skincare' },
  { id: 'nail', name: 'Nail Art & Extensions' },
  { id: 'spa', name: 'Body Spa & Massage' },
  { id: 'eyebrows', name: 'Eyebrows & Waxing' },
];

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', 
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
];

const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      // Show success message
      toast({
        title: "Appointment booked successfully!",
        description: "We'll contact you shortly to confirm your booking.",
      });
      
      // Reset form
      setDate(undefined);
      setService("");
      setTime("");
      setName("");
      setPhone("");
      setEmail("");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-serif font-medium mb-2">Personal Information</h3>
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
              className="bg-white"
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
              className="bg-white"
            />
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
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
            className="bg-white"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-serif font-medium mb-2">Appointment Details</h3>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            Select Service
          </label>
          <Select value={service} onValueChange={setService} required>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Select Date
          </label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => {
              // Disable past dates and Mondays (salon closed)
              const day = date.getDay();
              return (
                date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                day === 1 // Monday is 1
              );
            }}
            className="rounded-md border bg-white"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium">
            Select Time
          </label>
          <Select value={time} onValueChange={setTime} required>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Choose a time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <div className="mt-8 pt-4">
            <Button 
              type="submit" 
              disabled={!date || !time || !service || !name || !phone || !email || isSubmitting}
              className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white"
            >
              {isSubmitting ? "Processing..." : "Book Appointment"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
