import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  innerClassName?: string;
  background?: "white" | "muted" | "primary";
}

export const Section = ({
  children,
  className,
  id,
  innerClassName,
  background = "white",
}: SectionProps) => {
  const bgStyles = {
    white: "bg-[#f8fafc]",
    muted: "bg-slate-50",
    primary: "bg-primary text-white",
  };
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", bgStyles[background], className)}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
};
