"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

export interface RadioOption<T extends string> {
  value: T;
  label: string;
}

interface RadioGroupProps<T extends string> {
  name: string;
  legend: string;
  options: ReadonlyArray<RadioOption<T>>;
  value?: T;
  onChange: (value: T) => void;
  error?: string;
  columns?: 1 | 2;
}

export function RadioGroup<T extends string>({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  columns = 1,
}: RadioGroupProps<T>) {
  const reactId = useId();
  const groupId = `rg-${reactId}`;
  const errorId = `${groupId}-error`;

  return (
    <fieldset className="flex flex-col gap-3" aria-invalid={error ? "true" : undefined}>
      <legend className="font-sans text-[13px] font-medium text-carbon mb-1">
        {legend}
      </legend>
      <div
        className={cn(
          "grid gap-2.5",
          columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
        )}
        role="radiogroup"
        aria-labelledby={groupId}
      >
        {options.map((opt) => {
          const optId = `${groupId}-${opt.value}`;
          const checked = value === opt.value;
          return (
            <label
              key={opt.value}
              htmlFor={optId}
              className={cn(
                "group flex items-center gap-3 cursor-pointer",
                "border px-4 py-3.5",
                "transition-all duration-300 ease-editorial",
                checked
                  ? "border-forest bg-bone"
                  : "border-carbon/20 bg-bone/40 hover:border-forest/60 hover:bg-bone",
              )}
            >
              <input
                id={optId}
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={cn(
                  "inline-flex h-4 w-4 shrink-0 items-center justify-center",
                  "rounded-full border transition-all duration-300",
                  checked
                    ? "border-forest bg-forest"
                    : "border-carbon/40 bg-transparent group-hover:border-forest/60",
                )}
              >
                {checked && (
                  <span className="h-1.5 w-1.5 rounded-full bg-bone" />
                )}
              </span>
              <span className="text-[15px] text-carbon leading-snug">
                {opt.label}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-[12px] text-red-700/80 font-medium"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}
