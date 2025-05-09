
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  position?: string;
  content: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  name,
  position,
  content,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <Card className={cn("border-none shadow-lg bg-white", className)}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-pink">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            {position && <p className="text-sm text-gray-600">{position}</p>}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-2 -left-2 text-4xl text-brand-pink/20">"</div>
          <p className="text-gray-700 relative z-10 pt-2">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
