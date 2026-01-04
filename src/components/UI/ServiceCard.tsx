import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-start p-8 rounded-3xl transition-all duration-300",
        "bg-primary-950/40 border-primary-800/50 border hover:border-primary-400",
        "hover:shadow-[0_0_40px_-15px_rgba(29,112,184,0.3)]",
        className
      )}
    >
      {/* ICONS  */}
      <div className="rounded-xl bg-primary-950/50 mb-6 p-3 text-primary-300 transition-colors group-hover:scale-105 group-hover:bg-primary-500 group-hover:text-white">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="mb-4 text-xl font-bold text-white tracking-tight">
        {title}
      </h3>

      <p className="text-primary-100/70 leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
};
