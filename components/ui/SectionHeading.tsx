import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      <span
        className={cn(
          "text-eyebrow",
          isDark ? "text-gold" : "text-forest",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-serif text-[40px] leading-[1.05] sm:text-[48px] md:text-[56px] lg:text-[64px]",
          isDark ? "text-bone" : "text-carbon",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-prose text-[17px] leading-[1.7] md:text-[18px]",
            isDark ? "text-bone/80" : "text-carbon/75",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
