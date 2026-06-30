import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary" | "outline-glass";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-g2g-yellow text-g2g-navy-950 font-bold hover:brightness-110 hover:scale-[1.03]",
  secondary:
    "bg-g2g-navy-700 text-white font-semibold hover:bg-g2g-navy-800 hover:scale-[1.03]",
  "outline-glass":
    "glass-card text-white font-semibold hover:border-white/25 hover:scale-[1.03] bg-white/5",
};

export function Button({
  className,
  variant = "primary",
  href,
  external,
  children,
  onClick,
  type,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base transition-all duration-250 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-g2g-yellow active:scale-[0.98]",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
