import { Section } from "@/components/UI/Section";
import { Heading } from "@/components/UI/Heading";
import { ServiceCard } from "@/components/UI/ServiceCard";
import { SERVICES_DATA } from "@/config/services";

export const Services = () => {
  return (
    <Section
      background="muted"
      id="services"
      className="relative"
      padding="hero"
    >
      <div className="text-center mb-16 space-y-4">
        {/* <Heading level={2} className="text-slate-900">
          Our Services
        </Heading> */}
        {/* <p className="max-w-2xl mx-auto text-slate-600 text-lg">
          At Pravidhi, we build websites, apps, and run campaigns that solve
          your business problems. We work with you from the initial idea through
          launch, making sure everything works well, stays secure, and runs
          smoothly.
        </p> */}

        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-accent"></div>
          <p className="text-text text-lg font-medium">Our Services</p>
          <div className="h-px w-16 bg-accent"></div>
        </div>
        <Heading level={2}>
          Exceptional Services For Your <span className="text-primary">Business Growth</span>
        </Heading>

        <p>Discover our wide range of digital solutions to enhance your online presence. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
};
