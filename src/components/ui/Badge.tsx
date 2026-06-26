import React from "react";
import { cn } from "./GlassCard";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
          {
            "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400":
              variant === "default",
            "border border-rose-200 text-rose-600 dark:border-rose-800 dark:text-rose-400":
              variant === "outline",
            "bg-transparent text-rose-600 dark:text-rose-400": variant === "ghost",
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

Badge.displayName = "Badge";
