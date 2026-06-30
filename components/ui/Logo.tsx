import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const heightClass = {
  sm: "h-14",
  md: "h-20",
  lg: "h-[6.5rem]",
} as const;

const LOGO_WIDTH = 600;
const LOGO_HEIGHT = 200;

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/logo-white.png"
        alt="G2G Logistics — Good To Go"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={cn("w-auto object-contain", heightClass[size])}
        sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 312px"
        quality={100}
        priority
        unoptimized
      />
    </span>
  );
}
