import type { AnchorHTMLAttributes, ReactNode } from "react";
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "secondary"; children: ReactNode };
export function Button({ variant = "secondary", className = "", children, ...rest }: Props) {
  const base = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:opacity-90"
      : "border border-line bg-surface text-ink hover:border-accent hover:text-accent";
  return <a className={`${base} ${styles} ${className}`} {...rest}>{children}</a>;
}
