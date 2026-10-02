"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems as allNav, profile } from "@/data/profile";
import { activities } from "@/data/extras";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const navItems = allNav.filter((n) => n.id !== "activities" || activities.length > 0);
const ids = navItems.map((n) => n.id);

export function Header() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${active === id ? "text-accent font-semibold" : "text-muted hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">{profile.shortName}</a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "location" : undefined} className={linkClass(n.id)}>{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg px-5 py-3 lg:hidden">
          <ul className="grid gap-1">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={`block ${linkClass(n.id)}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
