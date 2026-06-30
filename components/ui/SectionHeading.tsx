import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "yellow" | "red";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accent = "yellow",
  className,
}: SectionHeadingProps) {
  const eyebrowColor =
    accent === "red"
      ? "text-g2g-red"
      : "text-g2g-yellow";

  const barColor =
    accent === "red" ? "bg-g2g-red" : "bg-g2g-yellow";

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.2em]",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-1 rounded-full",
          barColor,
          align === "center" ? "mx-auto w-16" : "w-16",
        )}
        aria-hidden
      />
      {description && (
        <p className="mt-4 text-base leading-relaxed text-g2g-gray-100/90 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
