
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-pink mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring our beauty services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white px-6">
              Return Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
