import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  innerClassName?: string;
  background?: "white" | "muted" | "primary";
  padding?: "default" | "hero" | "none";
}

export const Section = ({
  children,
  className,
  id,
  innerClassName,
  background = "white",
  padding = "default",
}: SectionProps) => {
  const bgStyles = {
    white: "bg-[#f8fafc]",
    muted: "bg-slate-50",
    primary: "bg-primary text-white",
  };

  const paddingStyles = {
    default: "py-16 md:py-24 lg:py-32",
    hero: "py-6 md:pt-16 md:pb-12",
    none: "",
  };
  return (
    <section
      id={id}
      className={cn(bgStyles[background], paddingStyles[padding], className)}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
};
