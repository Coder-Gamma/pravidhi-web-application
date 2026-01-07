import { Heading } from "@/components/UI/Heading";
import { Section } from "@/components/UI/Section";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Their team delivered a scalable solution ahead of schedule. The code quality and communication were outstanding throughout the project.",
    author: "Aarav Sharma",
    role: "CTO, FinTech Nova",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=512&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "We partnered with them for a full-stack web application, and the results exceeded our expectations in both performance and design.",
    author: "Emily Carter",
    role: "Product Manager, CloudAxis",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "Their cloud migration strategy helped us reduce infrastructure costs while improving system reliability and security.",
    author: "Rahul Mehta",
    role: "Head of Engineering, ScaleOps",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=512&auto=format&fit=crop",
  },
  {
    id: 4,
    quote:
      "From ideation to deployment, the process was seamless. Their technical expertise and problem-solving mindset stood out.",
    author: "Sophia Nguyen",
    role: "Founder, StartupBridge",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=512&auto=format&fit=crop",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => prev - 1 + (TESTIMONIALS.length % TESTIMONIALS.length)
    );
  return (
    <Section background="muted">
      <div className="grid grid=cols-2">
        {/* LEFT KO DIV */}
        <div className="flex flex-col">
          <Heading level={1}>
            From our <span>Community</span>
          </Heading>
          <p>
            Here's what customers have to say about Pravidhi Digital Innovations
            Nepal Pvt Ltd
          </p>
          <div className="flex">
            <button onClick={handlePrev}>
              <CircleArrowLeft />
            </button>
            <button onClick={handleNext}>
              <CircleArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT KO DIV */}
        <div>
          {/* QUATION  MARK */}
          <div className="relative">
            <span className="absolute">“</span>
          </div>

          {/* actual quote  */}
          <div>
            <p>{current.quote}</p>
          </div>

          <div className="flex">
            <div>
              <img
                src={current.image}
                alt={current.author}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Author text details div */}

            <div className="flex">
              <Heading level={4}>{current.author}</Heading>
              <p>{current.role}</p>
            </div>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
