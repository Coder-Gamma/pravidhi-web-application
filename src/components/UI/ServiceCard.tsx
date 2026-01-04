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
        "bg-white border-slate-200 border",
        "hover:-translate-y-2 hover:border-primary-300",
        "hover:shadow-xl hover:shadow-primary-500/10",
        className
      )}
    >
      {/* ICONS  */}
      <div
        className="rounded-xl bg-primary-50 mb-6 p-3 text-primary-600 transition-colors  group-hover:bg-primary-500
  group-hover:text-white
  group-hover:scale-105"
      >
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="mb-4 text-xl font-bold text-slate-900 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
};
