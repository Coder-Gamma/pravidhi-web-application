import { Section } from "@/components/UI/Section";
import { Heading } from "@/components/UI/Heading";
import { ServiceCard } from "@/components/UI/ServiceCard";
import { SERVICES_DATA } from "@/config/services"; // Import here

export const Services = () => {
  return (
    <Section
      background="primary"
      id="services"
      className="bg-slate-50 relative"
    >
      <div className="text-center mb-16 space-y-4">
        <Heading level={2} className="text-slate-900">
          Innovative Solutions for Your Success
        </Heading>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
          Discover how we build trust with our clients through reliable
          services...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard
            key={index}
            {...service} // Using spread operator for cleaner code
          />
        ))}
      </div>
    </Section>
  );
};
