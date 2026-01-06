import LogoCloud from "@/components/common/LogoCloud";
import { Button } from "@/components/UI/Button";
import { Heading } from "@/components/UI/Heading";
import { Section } from "@/components/UI/Section";
import { ArrowRight, Sparkles } from "lucide-react";
// import { cn } from "../lib/utils";

export const Hero = () => {
  return (
    <Section
      background="muted"
      padding="hero"
      className="relative overflow-hidden min-h-screen md:min-h-[calc(100vh-4rem)]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full  opacity-10 pointer-events-none" />

      <div className="flex flex-col items-center text-center py-16 md:py-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles size={14} />
          <span className="">Next Generation Web Solutions</span>
        </div>

        <Heading level={1} className="max-w-4xl">
          Empowering Businesses with <span className="text-primary">Modern Technology</span>
        </Heading>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
          Pravidhi delivers high-performance web applications tailored to your
          brand's growth. Fast, responsive, and ready for the future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2">
            Get Quote <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg">
            View Our Work
          </Button>
        </div>

        <LogoCloud />
      </div>
    </Section>
  );
};
