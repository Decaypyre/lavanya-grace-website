
import BookingForm from '@/components/BookingForm';

const BookPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative py-16 bg-brand-pink">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Book Your Appointment</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Schedule your visit to Lavanya Luxe and experience our premium beauty services.
          </p>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-full -mb-32 -mr-32"></div>
          <div className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full -mt-32 -ml-32"></div>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <BookingForm />
          </div>
        </div>
      </section>
      
      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Salon Hours</h3>
              <p className="text-gray-600">
                Open 10 AM – 8 PM<br />
                Monday Closed
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Contact</h3>
              <p className="text-gray-600">
                +91 12345 67890<br />
                info@lavanyaluxe.com
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Location</h3>
              <p className="text-gray-600">
                Lavanya Luxe Beauty Salon,<br />
                Sector 15, Gurgaon
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about bookings and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How far in advance should I book my appointment?</h3>
              <p className="text-gray-600">
                We recommend booking at least 2-3 days in advance for regular services and 2-3 weeks for bridal packages to ensure availability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                Please provide at least 24 hours notice for cancellations. Late cancellations may incur a fee of 25% of the service cost.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Do you offer home services?</h3>
              <p className="text-gray-600">
                Yes, we offer home services for bridal packages and certain treatments. Additional charges apply based on location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
