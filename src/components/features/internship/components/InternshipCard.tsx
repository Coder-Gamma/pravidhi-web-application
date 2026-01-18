import { Button } from "@/components/UI/Button";
import { Internship } from "@/config/types";

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard = ({ internship }: InternshipCardProps) => {
  const { title, description, image, available, total } = internship;
  return (
    <div className="flex flex-col rounded 2xl bg-secondary shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-44 object-cover" />

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted mb-6 flex-1"> {description} </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted">
          Available: {available} / Total: {total}
        </span>

        <Button variant="primary" disabled={available === 0} className="">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default InternshipCard;
