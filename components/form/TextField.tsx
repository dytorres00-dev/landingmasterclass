"use client";

import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
} from "react";
import { cn } from "@/lib/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  optional?: boolean;
  helper?: ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, error, optional, helper, className, id, ...rest },
    ref,
  ) {
    const reactId = useId();
    const fieldId = id ?? `tf-${reactId}`;
    const errorId = `${fieldId}-error`;
    const helperId = `${fieldId}-helper`;

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={fieldId}
          className="font-sans text-[13px] font-medium text-carbon"
        >
          {label}
          {optional && (
            <span className="ml-2 text-carbon/40 font-normal">(opcional)</span>
          )}
        </label>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            [error && errorId, helper && helperId].filter(Boolean).join(" ") ||
            undefined
          }
          className={cn(
            "w-full bg-transparent border-b border-carbon/30 focus:border-forest",
            "px-0 py-3 text-[16px] text-carbon placeholder:text-carbon/35",
            "transition-colors duration-300 ease-editorial",
            "focus:outline-none",
            error && "border-red-700/60 focus:border-red-700",
            className,
          )}
          {...rest}
        />
        {helper && !error && (
          <p id={helperId} className="text-[12px] text-carbon/50">
            {helper}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-[12px] text-red-700/80 font-medium"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);
