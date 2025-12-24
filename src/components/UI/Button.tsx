import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

// BUTTON VARIENTS and SIZES

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      ...props
    },
    ref
  ) => {
    // BASE STYLES

    const baseStyles = `inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 
   disabled:pointer-events-none disabled:opacity-50 cursor-pointer`;

    // Variant styles

    const variants = {
      primary: "bg-primary text-white hover:bg-primary-700 shadow-sm",
      secondary: "bg-secondary text-white hover:bg-secondary-700",
      outline: "border-2 border-secondary text-secondary hover:bg-primary-50",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent " />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
