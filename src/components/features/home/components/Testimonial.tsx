import { Heading } from "@/components/UI/Heading";
import { Section } from "@/components/UI/Section";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  return (
    <Section background="muted" padding="hero">
      <div className="mx-auto max-w-6xl border-t border-slate-300 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center ">
          {/* LEFT KO DIV */}
          <div className="flex flex-col gap-6 text-center lg:text-left ">
            <Heading level={1} className="font-normal">
              From our <span className="font-semibold">Customers</span>
            </Heading>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed ">
              Here's what customers have to say about Pravidhi Digital
              Innovations Nepal Pvt Ltd
            </p>

            <div className="flex justify-center lg:justify-start mt-4 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-slate-300 hover:border-accent hover:text-accent transition"
              >
                <ArrowLeft size={36} strokeWidth={1} />
              </button>
              <button
                onClick={handleNext}
                className=" p-2 rounded-full border border-slate-300 hover:border-accent hover:text-accent transition"
              >
                <ArrowRight
                  size={36}
                  strokeWidth={1}
                  className=" hover:text-accent group-hover:scale-105 "
                />
              </button>
            </div>
          </div>

          {/* RIGHT KO DIV */}
          <div className="relative bg-background/70 backdrop-blur-md border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
            {/* QUATION  MARK */}
            <span className="absolute top-3 left-3 text-7xl font-serif text-accent/20">
              “
            </span>

            {/* actual quote  */}

            <p className="text-lg sm:text-xl font-medium leading-relaxed tracking-wide">
              {current.quote}
            </p>

            <div className="mt-8 flex gap-4 items-center">
              <img
                src={current.image}
                alt={current.author}
                className="h-16 w-16 rounded-[50%] object-cover"
              />

              {/* Author text details div */}

              <div>
                <Heading className="text-accent leading-none" level={4}>
                  {current.author}
                </Heading>
                <p className="text-sm mt-1 text-muted">{current.role}</p>
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
