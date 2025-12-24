import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export const Heading = ({ level = 1, children, className }: HeadingProps) => {
  const Tag = `h${level}` as const;

  const sizes = {
    1: "text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl",
    2: "text-3xl font-bold tracking-tight md:text-4xl",
    3: "text-2xl font-semibold md:text-3xl",
    4: "text-xl font-semibold",
    5: "text-lg font-medium",
    6: "text-base font-medium",
  };

  return (
    <Tag className={cn(sizes[level], "text-brand-primary", className)}>
      {children}
    </Tag>
  );
};
