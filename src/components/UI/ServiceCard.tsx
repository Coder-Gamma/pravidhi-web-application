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
        "bg-slate-900/40 border-slate-800 hover:border-accent/50",
        className
      )}
    >
      {/* ICONS  */}
      <div className="rounded-xl bg-slate-800 mb-6 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="mb-4 text-xl font-bold text-white tracking-tight">
        {title}
      </h3>

      <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
};
