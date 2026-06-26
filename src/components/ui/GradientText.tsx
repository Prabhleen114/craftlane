import React from "react";
import { cn } from "./GlassCard";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "warm" | "accent";
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          {
            "gradient-text": variant === "primary" || variant === "accent",
            "gradient-text-warm": variant === "warm",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = "GradientText";
