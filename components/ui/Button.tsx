"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-forest text-bone hover:bg-forest-soft active:bg-forest border border-forest shadow-cta hover:shadow-glow-forest",
  secondary:
    "bg-transparent text-forest border border-forest hover:bg-forest hover:text-bone",
  ghost:
    "bg-transparent text-carbon border border-transparent hover:text-forest",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      children,
      fullWidth,
      loading,
      disabled,
      className,
      type = "button",
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex items-center justify-center gap-3",
          "px-8 py-4 md:px-10 md:py-[18px]",
          "font-sans text-[13px] md:text-[14px] font-medium uppercase tracking-cta",
          "transition-all duration-300 ease-editorial",
          "hover:-translate-y-[1px] active:translate-y-0",
          "disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed",
          fullWidth && "w-full",
          variantStyles[variant],
          className,
        )}
        {...rest}
      >
        {loading ? (
          <span className="inline-flex items-center gap-3">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeOpacity="0.25"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span>Enviando…</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);
