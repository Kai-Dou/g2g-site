import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/** Altura de exibição — use PNG/SVG horizontal ~3:1 para melhor nitidez */
const displayHeight = {
  sm: 48,
  md: 64,
  lg: 80,
} as const;

export function Logo({ className, size = "md" }: LogoProps) {
  const height = displayHeight[size];

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/logo.png"
        alt="G2G Logistics — Good To Go"
        width={500}
        height={500}
        className="w-auto object-contain"
        style={{ height }}
        sizes={`${Math.round(height * 3)}px`}
        quality={100}
        priority
        unoptimized
      />
    </span>
  );
}
