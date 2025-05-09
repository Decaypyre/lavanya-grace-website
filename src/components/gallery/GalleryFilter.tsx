
import { Button } from '@/components/ui/button';

interface FilterOption {
  id: string;
  label: string;
}

interface GalleryFilterProps {
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const GalleryFilter = ({ filters, activeFilter, onFilterChange }: GalleryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilterChange(filter.id)}
          className={
            activeFilter === filter.id
              ? "bg-brand-pink hover:bg-brand-pink/90 text-white"
              : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default GalleryFilter;
