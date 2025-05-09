import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Appointment, AppointmentStatus } from '@/types/appointment';

const mockAppointments = [
  {
    id: "APT2023001",
    name: "Priya Sharma",
    service: "Bridal Makeup Package",
    date: "2023-11-15",
    time: "14:30",
    status: "in-progress" as AppointmentStatus,
    progress: 60
  },
  {
    id: "APT2023002",
    name: "Aisha Patel",
    service: "Hair Styling & Color",
    date: "2023-11-18", 
    time: "11:00",
    status: "scheduled" as AppointmentStatus,
    progress: 0
  },
  {
    id: "APT2023003", 
    name: "Meera Reddy",
    service: "Facial & Spa Package",
    date: "2023-11-10",
    time: "15:45",
    status: "completed" as AppointmentStatus,
    progress: 100
  }
];

const TrackingForm = () => {
  const [bookingId, setBookingId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [error, setError] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setError("");
    const foundAppointment = mockAppointments.find(apt => apt.id === bookingId);
    
    if (foundAppointment) {
      setAppointment(foundAppointment);
      setIsSubmitted(true);
    } else {
      setError("No appointment found with this booking ID. Please check and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="bookingId" className="block text-sm font-medium text-gray-700">
          Booking ID:
        </label>
        <Input
          type="text"
          id="bookingId"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          placeholder="Enter your Booking ID"
          required
        />
      </div>
      
      <Button type="submit" className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white">
        Track Appointment
      </Button>
      
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      
      {isSubmitted && appointment && (
        <Card className="bg-gray-50 border-none shadow-sm">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Appointment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <p className="text-sm font-medium text-gray-700">Name:</p>
                <p className="text-gray-600">{appointment.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Service:</p>
                <p className="text-gray-600">{appointment.service}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Date:</p>
                <p className="text-gray-600">{appointment.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Time:</p>
                <p className="text-gray-600">{appointment.time}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Status:</p>
                <p className="text-gray-600">{appointment.status}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Progress:</p>
                <p className="text-gray-600">{appointment.progress}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </form>
  );
};

export default TrackingForm;
