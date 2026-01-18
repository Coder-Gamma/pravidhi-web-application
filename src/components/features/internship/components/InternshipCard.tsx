import { Button } from "@/components/UI/Button";
import { Internship } from "@/config/types";

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard = ({ internship }: InternshipCardProps) => {
  const { title, description, image, available, total } = internship;
  return (
    <div className="group flex flex-col gap-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Availability Badge */}
        <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
          <span className="text-xs font-semibold text-muted">
            {available > 0 ? (
              <span className="text-accent"> Available: {available}</span>
            ) : (
              <span className="text-red-600">Not Available</span>
            )}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 px-5 pb-5">
        <div className="flex flex-col flex-1 mb-4">
          <h3 className="text-xl font-bold mb-2 text-text group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed flex-1">
            {description}
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-muted mb-0.5">Total slots:</span>
            <span className="text-sm font-semibold text-text">{total}</span>
          </div>

          <Button
            variant="primary"
            disabled={available === 0}
            className=" disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {available === 0 ? "Unavailable" : "Apply Now"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
