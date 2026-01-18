import { Heading } from "@/components/UI/Heading";
import { Section } from "@/components/UI/Section";

const InternPortal = () => {
  return (
    <>
      <Section padding="hero">
        <div className="relative rounded-2xl shadow-2xl overflow-hidden">
          <img
            src="https://iahq.imgix.net/images/destinations/nepal/internships/information-technology-internship-in-nepal.jpg?auto=format,compress"
            alt="internship"
            className="w-full object-cover h-125"
          />
          {/* OVERLAY DIV */}
          <div className="inset-0 absolute bg-black/25" />

          {/* TEXT */}
          <div className="absolute inset-0 flex flex-col  gap-4 md:gap-6 text-white p-4 md:p-12">
            <p className="text-primary-200 text-sm font-medium tracking-wide uppercase">
              // INTERNSHIP Opportunities
            </p>
            <Heading level={1} className="text-white max-w-2xl ">
              Internship Opportunities at Pravidhi
            </Heading>
            <p className="max-w-xl  text-lg text-shadow-gray-200">
              Kickstart your Career with real-world projects and hands on
              experience from skilled mentors at Pravidhi Digital.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default InternPortal;
