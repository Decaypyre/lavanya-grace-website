
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { CheckCircle } from 'lucide-react';

const MOCK_DATA = {
  "A123456": {
    name: "Priya Sharma",
    service: "Bridal Makeup",
    date: "May 15, 2025",
    time: "11:00 AM",
    status: "confirmed",
    progress: 0,
  },
  "B789012": {
    name: "Meera Patel",
    service: "Hair Styling & Color",
    date: "May 12, 2025",
    time: "3:00 PM",
    status: "in-progress",
    progress: 50,
  },
  "C345678": {
    name: "Neha Singh",
    service: "Body Spa & Massage",
    date: "May 10, 2025",
    time: "2:00 PM",
    status: "completed",
    progress: 100,
  }
};

type AppointmentStatus = "confirmed" | "in-progress" | "completed";

interface Appointment {
  name: string;
  service: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  progress: number;
}

const TrackingForm = () => {
  const [bookingId, setBookingId] = useState("");
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const foundAppointment = MOCK_DATA[bookingId as keyof typeof MOCK_DATA];
      
      if (foundAppointment) {
        setAppointment(foundAppointment);
      } else {
        toast({
          variant: "destructive",
          title: "Appointment not found",
          description: "Please check your booking ID and try again.",
        });
        setAppointment(null);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const getStatusLabel = (status: AppointmentStatus) => {
    switch (status) {
      case "confirmed":
        return "Appointment Confirmed";
      case "in-progress":
        return "Service In Progress";
      case "completed":
        return "Service Completed";
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="space-y-2">
          <label htmlFor="bookingId" className="text-sm font-medium">
            Booking ID
          </label>
          <div className="flex gap-2">
            <Input
              id="bookingId"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              placeholder="Enter your booking ID (e.g. A123456)"
              className="flex-1 bg-white"
              required
            />
            <Button 
              type="submit" 
              disabled={!bookingId || isLoading}
              className="bg-brand-pink hover:bg-brand-pink/90 text-white"
            >
              {isLoading ? "Searching..." : "Track"}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Your booking ID was sent to you in the confirmation email.
          </p>
        </div>
      </form>

      {appointment && (
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-serif font-medium mb-4">Appointment Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Client Name</p>
              <p className="font-medium">{appointment.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Service</p>
              <p className="font-medium">{appointment.service}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">{appointment.date}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium">{appointment.time}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Appointment Status</h4>
            <Progress value={appointment.progress} className="h-2" />
            
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className={`text-center ${appointment.status === "confirmed" || appointment.status === "in-progress" || appointment.status === "completed" ? "text-brand-pink" : ""}`}>
                <div className="flex flex-col items-center">
                  <CheckCircle size={20} className="mb-1" />
                  <span className="text-xs">Confirmed</span>
                </div>
              </div>
              <div className={`text-center ${appointment.status === "in-progress" || appointment.status === "completed" ? "text-brand-pink" : "text-gray-400"}`}>
                <div className="flex flex-col items-center">
                  <CheckCircle size={20} className="mb-1" />
                  <span className="text-xs">In Progress</span>
                </div>
              </div>
              <div className={`text-center ${appointment.status === "completed" ? "text-brand-pink" : "text-gray-400"}`}>
                <div className="flex flex-col items-center">
                  <CheckCircle size={20} className="mb-1" />
                  <span className="text-xs">Completed</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 rounded bg-brand-pink/10 text-center">
              <p className="text-brand-pink font-medium">{getStatusLabel(appointment.status)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingForm;
