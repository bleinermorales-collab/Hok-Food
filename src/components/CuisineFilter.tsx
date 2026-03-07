import { motion } from 'framer-motion';

interface Props {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
}

const CuisineFilter = ({ filters, active, onChange }: Props) => {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className="relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          {active === filter && (
            <motion.div
              layoutId="cuisineFilter"
              className="absolute inset-0 gradient-brand rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className={`relative z-10 ${active === filter ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            {filter}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CuisineFilter;
