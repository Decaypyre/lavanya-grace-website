
import TrackingForm from '@/components/TrackingForm';

const TrackPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative py-16 bg-brand-black">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Track Your Appointment</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Check the status of your scheduled services at Lavanya Luxe.
          </p>
        </div>
      </section>
      
      {/* Tracking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <TrackingForm />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to track your appointment status.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-serif mb-2">Enter Your Booking ID</h3>
              <p className="text-gray-600">
                Enter the booking ID you received in your confirmation email.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-serif mb-2">View Status</h3>
              <p className="text-gray-600">
                See your appointment details and current status.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-serif mb-2">Stay Updated</h3>
              <p className="text-gray-600">
                Check back anytime to see updates on your appointment progress.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Need Help Section */}
      <section className="py-16 bg-brand-pink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4">Need Help?</h2>
            <p className="text-white/90 mb-8">
              If you're having trouble tracking your appointment or need to make changes, our team is here to assist you.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-white/80">Call Us</p>
                  <a href="tel:+911234567890" className="font-medium hover:underline">+91 12345 67890</a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-white/80">Email Us</p>
                  <a href="mailto:info@lavanyaluxe.com" className="font-medium hover:underline">info@lavanyaluxe.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackPage;
