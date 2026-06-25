import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const displayHeight = {
  sm: 44,
  md: 56,
  lg: 72,
} as const;

const LOGO_WIDTH = 600;
const LOGO_HEIGHT = 200;

export function Logo({ className, size = "md" }: LogoProps) {
  const height = displayHeight[size];

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/logo-figma.svg"
        alt="G2G Logistics — Good To Go"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="w-auto object-contain"
        style={{ height }}
        sizes={`${Math.round(height * (LOGO_WIDTH / LOGO_HEIGHT))}px`}
        priority
      />
    </span>
  );
}
